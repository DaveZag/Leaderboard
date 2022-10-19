const saveData = async (score) => {
  const url =
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/a7h3NjP2qu53OCSBUBrN/scores/';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'content-Type': 'application/json',
    },
    body: JSON.stringify(score),
  });
};

export default saveData;
