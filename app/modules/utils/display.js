const list = document.querySelector('.list');

const display = (leader) => {
  const li = document.createElement('li');
  li.classList.add('leader');
  li.innerText = `${leader.user} : ${leader.score}`;
  list.appendChild(li);
};

const displayAll = (leaders) => {
  leaders.forEach((element) => {
    display(element);
  });
};

export { displayAll };
export default display;
