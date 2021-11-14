import firebase from "firebase";

const LogInWithFirebase = () => {
  let google_provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(google_provider)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
};

const LogOutWithFirebase = () => {
  firebase.auth().signOut();
};

export { LogInWithFirebase, LogOutWithFirebase };
