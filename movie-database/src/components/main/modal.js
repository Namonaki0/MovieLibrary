document.addEventListener("DOMContentLoaded", () => {
  const movieModal = document.querySelector(".modal-movie-wrapper");
  const movieContainers = document.querySelectorAll(".movie-container");
  movieContainers.forEach((movieContainer) => {
    movieContainer.addEventListener("click", (e) => {
      console.log("hello");

      //   movieModal.classList.add("modal-visible");
      console.log("clicked");
    });
  });
});
