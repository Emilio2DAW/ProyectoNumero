# README – Juego de Adivinar el Número Mágico

## 1. Descripción del proyecto
El **Juego de Adivinar el Número Mágico** es una página web interactiva desarrollada con **HTML, CSS y JavaScript**.  
Su objetivo es que el usuario adivine un número secreto generado aleatoriamente entre **1 y 100**.  
El programa ofrece pistas, lleva un contador de intentos y muestra una valoración final según el rendimiento del jugador.

---

## 2. Estructura del proyecto
El proyecto está dividido en tres archivos principales:

- **index.html** → Contiene la estructura del juego.  
- **styles.css** → Define el diseño, los colores y el estilo visual de la página.  
- **script.js** → Controla la lógica y el funcionamiento del juego.

---

## 3. Funcionamiento general

1. Al cargar la página, el sistema genera un número aleatorio entre **1 y 100**.  
2. El usuario introduce su número en el campo y pulsa el botón **“¡Probar!”**.  
3. El programa analiza el número y muestra una pista:
   - “El número mágico es mayor” si el valor es demasiado bajo.  
   - “El número mágico es menor” si el valor es demasiado alto.  
   - “¡Bravo! El número era X” si el usuario acierta.  
4. En cada intento, el contador aumenta y se muestra en pantalla.  
5. Al acertar, se bloquea la entrada de datos y se muestra una valoración final:
   - Hasta 5 intentos → **Excelente explorador de números.**  
   - Entre 6 y 8 intentos → **Muy bien.**  
   - Más de 8 intentos → **Sigue practicando.**  
6. El botón **“Nuevo juego”** reinicia todo para comenzar una nueva partida.

---

## 4. Ejecución
1. Descarga los tres archivos en una misma carpeta.  
2. Abre el archivo **index.html** en tu navegador.  
3. Juega directamente sin necesidad de instalación.

---

## 5. Autor
**Autor:** Emilio Mariscal Sierra y Julio Javier Pascual Cruz 
**Fecha:** Octubre 2025  
