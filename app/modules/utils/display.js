const table = document.querySelector('.list');

const display = (leader) => {
  const tr = document.createElement('tr');
  tr.classList.add('leader');
  tr.innerHTML = ` <td>${leader.user} :</td> 
                    <td>${leader.score}</td>`;
  table.appendChild(tr);
};

const displayAll = (leaders) => {
  leaders.forEach((element) => {
    display(element);
  });
};

export { displayAll };
export default display;
