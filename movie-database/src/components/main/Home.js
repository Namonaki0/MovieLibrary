import React, { useState, useEffect } from "react";
import { AiOutlineUser } from "react-icons/ai";
import {
  LogInWithFirebase,
  LogOutWithFirebase,
} from "../utils/FirebaseLoginHandler";
import firebase from "firebase";
import counterpart from "counterpart";
import Translate from "react-translate-component";
import {
  lightModeEnabled,
  lightModeDisabled,
} from "../settings/colorSchemeHandler";

export default function Home() {
  const [userIsSignedIn, setUserIsSignedIn] = useState(true);
  const [userName, setUserName] = useState("");
  let [welcomeMessage, setWelcomeMessage] = useState();

  //? FIREBASE AUTHENTICATION TOGGLE ----------
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUserIsSignedIn(true);
      setUserName(user.displayName);
    } else {
      setUserIsSignedIn(false);
    }
  });
  //? FIREBASE AUTHENTICATION TOGGLE ------ END

  useEffect(() => {
    //? TRANSLATED WELCOME MESSAGE -------
    let welcome = counterpart.translate("welcome");
    setWelcomeMessage(welcome);
    //? TRANSLATED WELCOME MESSAGE -- END

    //? LIGHTMODE LOCAL-STORAGE CHECKER
    if (localStorage.getItem("lightMode") === "enabled") {
      lightModeEnabled();
    } else {
      lightModeDisabled();
    }
    //? LIGHTMODE LOCAL-STORAGE CHECKER
  }, []);

  if (userIsSignedIn === true) {
    //? IF USER IS SIGNED IN -------
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
    //? IF USER IS SIGNED IN --- END
  } else {
    //? IF USER IS SIGNED OUT ------
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
    //? IF USER IS SIGNED OUT --- END
  }
}
