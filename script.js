const joke = document.getElementById('joke');
const answer = document.getElementById('answer');
const button = document.getElementById('btn');

function generateJoke() {
  fetch('https://v2.jokeapi.dev/joke/Any?type=twopart')
    .then((res) => res.json())
    .then((data) => {
      joke.innerText = data.setup;
      answer.innerText = data.delivery;
    });
}

button.addEventListener('click', generateJoke);