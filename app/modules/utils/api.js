import { displayAll } from './display.js';

const displayError = document.querySelector('.error');

const createGame = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  await fetch(url, {
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify({ name: 'Car Race' }),
  });
};

const getData = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/a7h3NjP2qu53OCSBUBrN/scores/';
  const response = await fetch(url);
  const data = await response.json();
  const resultArr = data.result;
  if (resultArr.length > 0) {
    displayAll(resultArr);
  } else {
    displayError.innerHTML = "Seems like there isn't any leading competitor...";
    displayError.style.display = 'block';
  }
};

getData().catch(() => {
  displayError.style.display = 'block';
});

export default getData;
export { createGame };
