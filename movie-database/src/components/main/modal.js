const movieContainers = document.querySelectorAll(".movie-container");
const movieTemplate = document.querySelector(".movie-template");
const modal = document.querySelector(".modal");

movieContainers.forEach((movieContainer) => {
  movieContainer.addEventListener("click", (e) => {
    let movieImage = e.target.children[0].currentSrc;
    let movieOverview = e.target.children[2].innerText;
    const modalDiv = document.createElement("div");
    modalDiv.classList.add("modal-movie-wrapper");
    modalDiv.innerHTML = `
    <i class="fas fa-times-circle"></i>
    <img class="modal-movie-image" src=${movieImage} />
    <div class="modal-movie-overview">${movieOverview}</div>
    
`;

    const closeModalIcon = document.querySelector(".fa-times-circle");

    closeModalIcon.addEventListener("click", () => {
      console.log(closeModalIcon);
      modalDiv.classList.remove("modal-movie-wrapper");
    });

    // console.dir();
  });
});
