import firebase from "firebase";
import {
  firebase_key,
  app_id,
  auth_domain,
  db_url,
  project_id,
  storage_bucket,
  sender_id,
} from "../apiKeys";

const firebaseConfig = {
  apiKey: `${firebase_key}`,
  authDomain: `${auth_domain}`,
  databaseURL: `${db_url}`,
  projectId: `${project_id}`,
  storageBucket: `${storage_bucket}`,
  messagingSenderId: `${sender_id}`,
  appId: `${app_id}`,
};

firebase.initializeApp(firebaseConfig);

export default firebase;
