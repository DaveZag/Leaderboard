import addLeader from './utils/add_leader.js';
import getData from './utils/api.js';

const base = () => {
  const submitBtn = document.querySelector('.submit-btn');
  const refreshBtn = document.querySelector('.refresh-btn');
  const name = document.querySelector('#name');
  const score = document.querySelector('#score');
  const error = document.querySelector('.error-form');
  const form = document.querySelector('form');
  const list = document.querySelector('.list');
  const regex = /^[0-9]+$/;

  // Prevent form default behavior
  form.onsubmit = (e) => {
    e.preventDefault();
  };

  submitBtn.addEventListener('click', (e) => {
    if (name.value && score.value) {
      if (regex.test(score.value)) {
        const nameTrimed = name.value.trim();
        const scoreTrimed = score.value.trim();

        addLeader(nameTrimed, scoreTrimed);
      } else {
        error.innerText = 'Score should be a number.';
        error.style.display = 'block';
      }
    } else {
      error.style.display = 'block';
      e.preventDefault();
    }

    setTimeout(() => {
      error.style.display = 'none';
    }, 7000);
  });

  refreshBtn.addEventListener('click', () => {
    list.innerHTML = '';
    setTimeout(() => {
      getData();
    }, 250);
  });
};

export default base;
