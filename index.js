// console.log("hello world");

const inputField = document.querySelector("input");
const form = document.querySelector("form");
const movieList = document.querySelector("ul");
const message = document.querySelector("#message");
// const addBtn = document.querySelector("button");

const deleteMovie = (event) => {
  event.target.parentNode.remove();
  message.textContent = "Movie deleted!";
};

const crossOffMovie = (event) => {
  event.target.classList.toggle("checked");

  if (event.target.classList.contains("checked")) {
    message.textContent = "Movie watched!";
  } else {
    message.textContent = "Movie added back!";
  }
};

const addMovie = (event) => {
  event.preventDefault();
  const movie = document.createElement("li");
  const movieTitle = document.createElement("span");

  movieTitle.textContent = inputField.value;
  movieTitle.addEventListener("click", crossOffMovie);
  movie.appendChild(movieTitle);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";

  deleteBtn.addEventListener("click", deleteMovie);
  movie.appendChild(deleteBtn);

  movieList.appendChild(movie);
  inputField.value = "";
};

form.addEventListener("submit", addMovie);
