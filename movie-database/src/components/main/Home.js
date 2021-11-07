import React, { useState, useEffect } from "react";
import { AiOutlineUser } from "react-icons/ai";
import {
  LogInWithFirebase,
  LogOutWithFirebase,
} from "../utils/FirebaseLoginHandler";
import firebase from "firebase";
import counterpart from "counterpart";
import Translate from "react-translate-component";

export default function Home() {
  const [userIsSignedIn, setUserIsSignedIn] = useState(true);
  const [userName, setUserName] = useState("");
  let [welcomeMessage, setWelcomeMessage] = useState();

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUserIsSignedIn(true);
      setUserName(user.displayName);
    } else {
      setUserIsSignedIn(false);
    }
  });

  useEffect(() => {
    let welcome = counterpart.translate("welcome");
    setWelcomeMessage(welcome);
  }, []);

  if (userIsSignedIn === true) {
    return (
      <main>
        <div className="login-settings-wrapper">
          <div className="login-settings" onClick={LogOutWithFirebase}>
            <Translate content="logout" component="span" />

            <AiOutlineUser className="user-auth" />
          </div>
          <span>{`${welcomeMessage} ${userName}`}</span>
        </div>
        <h1>
          <i class="fas fa-photo-video"></i>
          <span>movie</span> library
        </h1>
      </main>
    );
  } else {
    return (
      <main>
        <div className="login-settings-wrapper">
          <div className="login-settings" onClick={LogInWithFirebase}>
            <Translate content="login" component="span" />
            <AiOutlineUser className="user-auth" />
          </div>
          <span className="logged-message"></span>
        </div>
        <h1>
          <i class="fas fa-photo-video"></i>
          <span>movie</span> library
        </h1>
      </main>
    );
  }
}
