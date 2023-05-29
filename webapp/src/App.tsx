import { AnonymousAuthContextProvider } from "./AnonymousAuthContextProvider.tsx";
import { NotificationPane } from "./NotificationPane.tsx";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase.ts";
import { PushButton } from "./PushButton.tsx";

initializeApp(firebaseConfig)

function App() {

  return (
    <AnonymousAuthContextProvider>
      <NotificationPane />
      <p>Hello, React PWA</p>
      <PushButton />
    </AnonymousAuthContextProvider>
  )
}

export default App
