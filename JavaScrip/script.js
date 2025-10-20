document.addEventListener('DOMContentLoaded', () => {
  //  Referencias a los elementos del DOM
  const guessInput = document.getElementById('guess');
  const tryBtn = document.getElementById('tryBtn');
  const resetBtn = document.getElementById('resetBtn');
  const feedback = document.getElementById('feedback');
  const attemptsEl = document.getElementById('attempts');
  const ratingEl = document.getElementById('rating');

  // Variables del juego
  let secret, attempts, finished;

  // Inicia una nueva partida
  function newGame() {
    secret = Math.floor(Math.random() * 100) + 1; // número secreto entre 1 y 100
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

  // Evalúa el intento del jugador
  function evaluate() {
    if (finished) return;

    const v = Number(guessInput.value);
    if (!v || v < 1 || v > 100) {
      //  Validación de entrada
      feedback.textContent = 'Introduce un número válido entre 1 y 100.';
      feedback.className = 'feedback is-wrong';
      return;
    }

    attempts++;
    attemptsEl.textContent = 'Intentos: ' + attempts;

    if (v === secret) {
      //  Adivinó el número
      feedback.textContent = `¡Bravo! El número era ${secret}`;
      feedback.className = 'feedback is-correct';
      finished = true;
      guessInput.disabled = true;
      tryBtn.disabled = true;

      // Mensaje según número de intentos
      let msg;
      if (attempts <= 5) msg = 'Excelente explorador de números.';
      else if (attempts <= 8) msg = 'Muy bien.';
      else msg = 'Lo lograste, sigue practicando.';
      ratingEl.textContent = msg;
    } else if (v < secret) {
      //  El número es mayor
      feedback.textContent = 'El número mágico es mayor.';
      feedback.className = 'feedback is-wrong';
    } else {
      //  El número es menor
      feedback.textContent = 'El número mágico es menor.';
      feedback.className = 'feedback is-wrong';
    }
  }

  // Eventos de botones y teclado
  tryBtn.addEventListener('click', evaluate);
  resetBtn.addEventListener('click', newGame);
  guessInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') evaluate();
  });

  //  Comienza el juego al cargar
  newGame();
});