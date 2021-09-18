import firebase from "firebase";
import { firebase_key, app_id } from "../apiKey";

const firebaseConfig = {
  apiKey: `${firebase_key}`,
  authDomain: "moviedatabase-74d8e.firebaseapp.com",
  databaseURL:
    "https://moviedatabase-74d8e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "moviedatabase-74d8e",
  storageBucket: "moviedatabase-74d8e.appspot.com",
  messagingSenderId: "207653651942",
  appId: `${app_id}`,
};

firebase.initializeApp(firebaseConfig);

export default firebase;
