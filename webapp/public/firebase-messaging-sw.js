// https://github.com/firebase/quickstart-js/blob/master/messaging/firebase-messaging-sw.js
/**
 * Here is the code snippet to initialize Firebase Messaging in the Service
 * Worker when your app is not hosted on Firebase Hosting.

 // Give the service worker access to Firebase Messaging.
 // Note that you can only use Firebase Messaging here. Other Firebase libraries
 // are not available in the service worker.
 **/
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
// TODO: 環境毎にファイルを用意する...？
firebase.initializeApp({
  apiKey: "AIzaSyCi-cVpN6KrS7FhVUoMY63YBu8TIzTNuig",
  authDomain: "kentunc-pwa-sample.firebaseapp.com",
  projectId: "kentunc-pwa-sample",
  storageBucket: "kentunc-pwa-sample.appspot.com",
  messagingSenderId: "685578777248",
  appId: "1:685578777248:web:a4111e710e372ef7424fc5"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();


// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// Keep in mind that FCM will still show notification messages automatically
// and you should use data messages for custom notifications.
// For more info see:
// https://firebase.google.com/docs/cloud-messaging/concept-options
// messaging.onBackgroundMessage(function(payload) {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png'
//   };
//
//   self.registration.showNotification(notificationTitle,
//     notificationOptions);
// });
