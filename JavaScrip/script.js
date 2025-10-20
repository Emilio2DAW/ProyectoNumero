document.addEventListener('DOMContentLoaded', () => {
  const guessInput = document.getElementById('guess');
  const tryBtn = document.getElementById('tryBtn');
  const resetBtn = document.getElementById('resetBtn');
  const feedback = document.getElementById('feedback');
  const attemptsEl = document.getElementById('attempts');
  const ratingEl = document.getElementById('rating');

  let secret, attempts, finished;

  function newGame() {
    secret = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    finished = false;
    attemptsEl.textContent = 'Intentos: 0';
    feedback.textContent = '¡Listo para jugar!';
    feedback.className = 'feedback';
    ratingEl.textContent = '';
    guessInput.value = '';
    guessInput.disabled = false;
    tryBtn.disabled = false;
    guessInput.focus();
  }

  function evaluate() {
    if (finished) return;
    const v = Number(guessInput.value);
    if (!v || v < 1 || v > 100) {
      feedback.textContent = 'Introduce un número válido entre 1 y 100.';
      feedback.className = 'feedback is-wrong';
      return;
    }

    attempts++;
    attemptsEl.textContent = 'Intentos: ' + attempts;

    if (v === secret) {
      feedback.textContent = `¡Bravo! El número era ${secret}`;
      feedback.className = 'feedback is-correct';
      finished = true;
      guessInput.disabled = true;
      tryBtn.disabled = true;

      let msg;
      if (attempts <= 5) msg = 'Excelente explorador de números.';
      else if (attempts <= 8) msg = 'Muy bien.';
      else msg = 'Lo lograste, sigue practicando.';
      ratingEl.textContent = msg;
    } else if (v < secret) {
      feedback.textContent = 'El número mágico es mayor.';
      feedback.className = 'feedback is-wrong';
    } else {
      feedback.textContent = 'El número mágico es menor.';
      feedback.className = 'feedback is-wrong';
    }
  }

  tryBtn.addEventListener('click', evaluate);
  resetBtn.addEventListener('click', newGame);
  guessInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') evaluate();
  });

  newGame();
});
