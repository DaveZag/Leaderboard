import Leader from './leader.js';
import saveToLocal from './save_local.js';

function addLeader(name, score) {
  const leader = new Leader(name, score);
  saveToLocal(leader);
}

export default addLeader;
