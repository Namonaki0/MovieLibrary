import firebase from "firebase";

export const LogInWithFirebase = () => {
  let google_provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(google_provider)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.err(err);
    });
};

export const LogOutWithFirebase = () => {
  firebase.auth().signOut();
};
