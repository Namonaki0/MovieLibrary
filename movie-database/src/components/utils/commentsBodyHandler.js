import firebase from "firebase";

//? COMMENTS DATE AND TIME ON SUBMIT ---------------
export default function commentsHandler() {
  //? DATE
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();
  let time = date.getTime();
  //? TIME
  let hours = date.getHours();
  let mins = date.getMinutes();

  let dateOfComment = `${day}/${month + 1}/${year}`;
  let timeOfComment = `${hours}:${mins}`;

  firebaseCommentBody(dateOfComment, timeOfComment);
}
//? END OF COMMENTS DATE AND TIME ---------------

//? FIREBASE REALTIME DB ------------
const firebaseCommentBody = (dateOfComment, timeOfComment) => {
  const commentRef = firebase.database().ref("Comments");

  const movieTitle = document.querySelector(".comment-window-movie-title");
  const name = document.querySelector(".form .nameInput");
  const comment = document.querySelector(".form .commentInput");

  const commentBody = {
    title: movieTitle.innerHTML,
    user: name.value,
    comment: comment.value,
    date: dateOfComment,
    time: timeOfComment,
  };

  commentRef.push(commentBody);

  name.value = "";
  comment.value = "";
};
//? END OF FIREBASE REALTIME DB ---------------
