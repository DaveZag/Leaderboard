function saveToLocal(leader) {
  const leaders = localStorage.getItem('leaders') === ''
    || localStorage.getItem('leaders') === null
    ? []
    : JSON.parse(localStorage.getItem('leaders'));

  leaders.push(leader);
  localStorage.setItem('leaders', JSON.stringify(leaders));
}

export default saveToLocal;
