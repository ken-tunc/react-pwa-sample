/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { HttpsError, onCall } from "firebase-functions/v2/https";
import * as admin from "firebase-admin";

admin.initializeApp();

export const push = onCall<{
  fcmToken: string;
  message: string;
}>({ region: 'asia-northeast1' }, async ({ data, auth }) => {
  if (!auth) {
    throw new HttpsError('unauthenticated', 'You must be signed in to use this feature!')
  }

  const payload = {
    notification: {
      title: 'Hello from React PWA',
      body: data.message,
    },
    token: data.fcmToken,
  };

  await admin.messaging().send(payload);
});
