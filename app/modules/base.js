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
  const tHeader = document.querySelector('.table-header');
  const date = document.querySelector('#date');
  const regex = /^[0-9]+$/;

  // Prevent form default behavior
  form.onsubmit = (e) => {
    e.preventDefault();
  };

  // return date to footer
  date.innerHTML = new Date().getFullYear();

  // submit form
  submitBtn.addEventListener('click', (e) => {
    if (name.value && score.value) {
      if (regex.test(score.value)) {
        const nameTrimed = name.value.trim();
        const scoreTrimed = score.value.trim();

        addLeader(nameTrimed, scoreTrimed);
        name.value = '';
        score.value = '';
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
    }, 6000);
  });

  refreshBtn.addEventListener('click', () => {
    list.innerHTML = `${tHeader.innerHTML}
    `;
    document.querySelector('.loading').style.display = 'block';
    setTimeout(() => {
      getData();
    }, 350);

    setTimeout(() => {
      document.querySelector('.loading').style.display = 'none';
    }, 650);
  });
};

export default base;
