import React, { useEffect, useState } from "react";
import { getMessaging, onMessage } from "firebase/messaging"

type PushNotification = {
  messageId: string;
  title: string | undefined;
  body: string | undefined;
}

const usePushNotification = () => {
  const [notification, setNotification] = useState<PushNotification>();

  useEffect(() => {
    const unsubscribe = onMessage(getMessaging(), (payload) => {
      setNotification({
        messageId: payload.messageId,
        title: payload.notification?.title,
        body: payload.notification?.body,
      })
    });

    return () => unsubscribe();
  }, []);

  return notification;
};

export const NotificationPane: React.FC = () => {
  const notification = usePushNotification();

  useEffect(() => {
    if (notification) {
      alert(`New notification: ${notification.title} - ${notification.body}`)
    }
  }, [notification]);

  return null;
}
