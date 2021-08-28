// const movieContainers = document.querySelectorAll(".movie-container");
// const movieTemplate = document.querySelector(".movie-template");
// const modal = document.querySelector(".modal");

// movieContainers.forEach((movieContainer) => {
//   movieContainer.addEventListener("click", (e) => {
//     console.dir(e.target.children);
//     let movieImage = e.target.children[0].currentSrc;
//     let movieTitle = e.target.children[1].innerText;
//     let movieOverview = e.target.children[2].innerText;
//     const modalDiv = document.createElement("div");
//     modalDiv.classList.add("modal-movie-wrapper");
//     modalDiv.innerHTML = `
//     <i class="fas fa-times-circle"></i>
//     <img class="modal-movie-image" src=${movieImage} />
//     <div class="modal-movie-title">${movieTitle}</div>
//     <div class="modal-movie-overview">${movieOverview}</div>
// `;

//     movieTemplate.appendChild(modalDiv);
//   });
// });

// movieContainers.forEach((movieContainer) => {
//   movieContainer.addEventListener("click", () => {
//     movieContainer.classList.toggle("modal-active");
//   });
//   console.dir(movieContainer);
// });
