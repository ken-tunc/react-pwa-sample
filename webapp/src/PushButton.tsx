import React, { useEffect, useState } from "react";
import { getApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
import { getFunctions, httpsCallable } from "firebase/functions";

export const PushButton: React.FC = () => {
  const [fcmToken, setFcmToken] = useState<string>()
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const fcmToken = await getToken(getMessaging(), {
        vapidKey: 'BOa3WLSqce9xmodqBoNfaO9oPvx-rzZhN3-IJ5N2gRCKyj-7yf1yzzXxluhqsMFSJnv5NTb1sPaPAD4d3RFDIvo',
      });
      setFcmToken(fcmToken);
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return null;
  }

  const onClick = async () => {
    const functions = getFunctions(getApp(), "asia-northeast1");
    await httpsCallable(functions, "push")({
      fcmToken,
      message: "Hi.",
    });
  };

  return (
    <button onClick={() => onClick()}>Send notification</button>
  );
}
