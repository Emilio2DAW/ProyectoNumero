README – Juego de Adivinar el Número Mágico

1. Descripción del proyecto
El Juego de Adivinar el Número Mágico es una página web interactiva desarrollada con HTML, CSS y JavaScript.
Su objetivo es que el usuario adivine un número secreto generado aleatoriamente entre 1 y 100.
El programa ofrece pistas, lleva un contador de intentos y muestra una valoración final según el rendimiento del jugador.

2. Estructura del proyecto
El proyecto está dividido en tres archivos principales:

index.html → contiene la estructura del juego.

styles.css → define el diseño, colores y estilo visual de la página.

script.js → controla la lógica y el funcionamiento del juego.

3. Funcionamiento general

Al cargar la página, el sistema genera un número aleatorio entre 1 y 100.

El usuario introduce su número en el campo y pulsa el botón “¡Probar!”.

El programa analiza el número y muestra una pista:

“El número mágico es mayor” si el valor es demasiado bajo.

“El número mágico es menor” si el valor es demasiado alto.

“¡Bravo! El número era X” si el usuario acierta.

En cada intento, el contador aumenta y se muestra en pantalla.

Al acertar, se bloquea la entrada de datos y se muestra una valoración final:

Hasta 5 intentos → Excelente explorador de números.

Entre 6 y 8 intentos → Muy bien.

Más de 8 intentos → Sigue practicando.

El botón “Nuevo juego” reinicia todo para comenzar una nueva partida.