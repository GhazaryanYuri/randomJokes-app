const API_Link = "https://v2.jokeapi.dev/joke/Any";
// const jokeContent = document.getElementById("jokeContent");
const randomJokeBtn = document.getElementById("randomJokeBtn");
const jokeContent = document.getElementById("jokeContent");

jokeContent.innerText = "Here are the jokes 😊";

async function fetchingAPI() {
  try {
    const response = await fetch(API_Link);
    const data = await response.json();

    if (data.type === "single") {
      jokeContent.innerText = data.joke;
    } else if (data.type === "twopart") {
      jokeContent.innerText = `${data.setup} - ${data.delivery}`;
    }
  } catch (error) {
    console.log(error);
  }
}

randomJokeBtn.addEventListener("click", fetchingAPI);
