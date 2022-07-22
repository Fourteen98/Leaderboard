export const refreshScores = async () => {
  const scoreBoard = document.querySelector('.score-board');
  scoreBoard.innerHTML = '';
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/U89UpEn5EXu1MQahYhm3/scores/',
  );
  const json = await response.json();

  json.result.forEach((score) => {
    scoreBoard.innerHTML += `
    <div class="score"><span>${score.user} :</span><span>${score.score}</span></div>
    `;
  });
};

export const addScore = async (e) => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/U89UpEn5EXu1MQahYhm3/scores/',
    {
      method: 'POST',
      body: JSON.stringify({
        name: 'My cool new game',
        user: `${e.target.name.value}`,
        score: `${e.target.score.value}`,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  return response;
};

window.addEventListener('load', refreshScores);