import './style.css';
import { addScore, refreshScores } from './modules/utilities.js';

const form = document.getElementById('form');
const refresh = document.getElementById('refresh');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addScore(e);
  form.reset();
});

refresh.addEventListener('click', () => {
  refreshScores();
});

window.addEventListener('load', refreshScores);