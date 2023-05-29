import { precacheAndRoute } from "workbox-precaching";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase.ts";
import { getMessaging } from "firebase/messaging";

declare let self: ServiceWorkerGlobalScope;
precacheAndRoute(self.__WB_MANIFEST);

const app = initializeApp(firebaseConfig);
getMessaging(app);
