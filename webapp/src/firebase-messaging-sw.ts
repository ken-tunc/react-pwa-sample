importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
firebase.initializeApp({
  apiKey: "AIzaSyCi-cVpN6KrS7FhVUoMY63YBu8TIzTNuig",
  authDomain: "kentunc-pwa-sample.firebaseapp.com",
  projectId: "kentunc-pwa-sample",
  storageBucket: "kentunc-pwa-sample.appspot.com",
  messagingSenderId: "685578777248",
  appId: "1:685578777248:web:a4111e710e372ef7424fc5"
});
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
firebase.messaging();
