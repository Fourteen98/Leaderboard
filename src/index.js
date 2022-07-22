import './style.css';
import { addScore, getScores } from './modules/utilities.js';

const form = document.getElementById('form');
const refresh = document.getElementById('refresh');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addScore(e).catch((err) => {
    console.log(err);
  });
  form.reset();
});

refresh.addEventListener('click', () => {
  getScores().catch((err) => {
    console.log(err);
  });
});

window.addEventListener('load', getScores);