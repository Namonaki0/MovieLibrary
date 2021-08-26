const movieContainers = document.querySelectorAll(".movie-container");
const movieTemplate = document.querySelector(".movie-template");

const modalDiv = document.createElement("div");
modalDiv.classList.add("modal-movie-wrapper");

movieContainers.forEach((movieContainer) => {
  const movieContainers = document.querySelectorAll(".movie-container");
  const movieTemplate = document.querySelector(".movie-template");

  movieContainer.addEventListener("click", () => {
    movieTemplate.appendChild(modalDiv);
    modalDiv.style.display = "flex";
  });
});

window.addEventListener("click", (e) => {
  if (e.target.style.display === "flex") {
    modalDiv.style.display = "none";
  }
});
