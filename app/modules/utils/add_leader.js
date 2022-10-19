import Leader from './leader.js';
import saveData from './save_toAPI.js';

const addLeader = (name, score) => {
  const leader = new Leader(name, score);
  saveData(leader);
};

export default addLeader;
