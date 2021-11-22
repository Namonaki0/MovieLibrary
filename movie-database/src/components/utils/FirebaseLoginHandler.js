import firebase from "firebase";

const LogInWithFirebase = () => {
  let google_provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(google_provider)
    .then((res) => {
      console.log(`logged in as ${res.additionalUserInfo.profile.name}`);
    })
    .catch((err) => {
      console.log(`ACCESS DENIED - ${err}`);
    });
};

const LogOutWithFirebase = () => {
  firebase.auth().signOut();
};

export { LogInWithFirebase, LogOutWithFirebase };
