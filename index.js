// console.log("hello world");

const inputField = document.querySelector("input");
const form = document.querySelector("form");
const movieList = document.querySelector("ul");
const message = document.querySelector("#message");
// const addBtn = document.querySelector("button");

const revealMessage = () => {
  message.classList.remove("hide");
  setTimeout(() => message.classList.add("hide"), 1000);
};

const deleteMovie = (event) => {
  event.target.parentNode.remove();
  console.log(event.target);
  message.textContent = `${event.target.parentNode["firstChild"]["innerHTML"]} deleted!`;
  revealMessage();
};

const crossOffMovie = (event) => {
  event.target.classList.toggle("checked");

  if (event.target.classList.contains("checked")) {
    message.textContent = `${event.target.textContent} watched!`;
  } else {
    message.textContent = `${event.target.textContent} added back!`;
  }
  revealMessage();
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
