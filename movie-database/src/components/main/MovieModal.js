import React from "react";

export default function MovieModal({
  movieImage,
  modalMovieTitle,
  movieOverview,
  movieReleaseDate,
  movieRating,
  movieModalInfo,
}) {
  return (
    <div style={{ display: movieModalInfo ? "block" : "" }}>
      <h2>{modalMovieTitle}</h2>
    </div>
  );
}

//? MODAL CREATION ---------------
// useEffect(() => {
//   const movieContainers = document.querySelectorAll(".movie-container");
//   const movieTemplate = document.querySelector(".movie-template");
//   const modalCloseBtnInnerText = `<i class="fas fa-times-circle"></i>`;

//   const modalDiv = document.createElement("div");

//   movieContainers.forEach((movieContainer) => {
//     movieContainer.addEventListener("click", (e) => {
//       // console.log(e.target.children);
//       let movieImage = e.target.children[1].currentSrc;
//       let movieTitle = e.target.children[2].innerText;
//       let movieOverview = e.target.children[3].innerText;
//       let movieReleaseDate = e.target.children[4].innerText;
//       let movieRating = e.target.children[5].innerText;

//       modalDiv.style.display = "flex";
//       modalDiv.classList.add("modal-movie-wrapper");
//       modalDiv.innerHTML = `
//               <span>${modalCloseBtnInnerText}</span>
//               <div class="modal-movie-inner-wrapper">
//                 <div class="modal-movie-image-wrapper">
//                  <img class="modal-movie-image" src=${movieImage} />
//                 </div>
//                 <div class="modal-movie-main-info">
//                   <div class="modal-movie-title">${movieTitle}</div>
//                   <div class="modal-movie-overview">${movieOverview}</div>
//                   <div class="modal-movie-secondary-info">
//                     <div class="modal-movie-release-date">${movieReleaseDate}</div>
//                     <div class="modal-movie-rating">${movieRating}</div>
//                   </div>
//                 </div>
//               </div>
//             `;

//       movieTemplate.appendChild(modalDiv);

//       //? CLOSE MODAL WITH X MARK //
//       window.addEventListener("click", (e) => {
//         if (e.target.classList.contains("fa-times-circle")) {
//           modalDiv.style.display = "none";
//         }
//       });
//     });
//   });

//   //? CLOSE MODAL BY CHOOSING ANOTHER MOVIE //
//   window.addEventListener("click", (e) => {
//     if (e.target.classList.contains("modal-movie-wrapper")) {
//       modalDiv.style.display = "none";
//     }
//   });
// });
//? END OF MODAL CREATION ---------------
