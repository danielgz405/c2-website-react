import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmV7Ya0cyFesqiAB8XTxIxJkcg6kiCwOg",
  authDomain: "cyc-acabados-arquitectonicos.firebaseapp.com",
  projectId: "cyc-acabados-arquitectonicos",
  storageBucket: "cyc-acabados-arquitectonicos.appspot.com",
  messagingSenderId: "26227357137",
  appId: "1:26227357137:web:ab2e654ce6ade2a9b4dcf0",
  measurementId: "G-YPXNC5K04M"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app, analytics};