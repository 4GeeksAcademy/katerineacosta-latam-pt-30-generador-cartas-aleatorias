/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  generarCartaAleatoria();
  function generarCartaAleatoria() {
    const palos = ["♠", "♥", "♦", "♣"];
    const valores = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];

    const paloAleatorio = palos[Math.floor(Math.random() * palos.length)];
    const valorAleatorio = valores[Math.floor(Math.random() * valores.length)];

    let paloSuperior = document.querySelector("#card__palo--superior");
    let numeroAleatorio = document.querySelector("#card__number");
    let paloInferior = document.querySelector("#card__palo--inferior");

    if (paloAleatorio === "♠") {
      paloSuperior.className = "palos pica";
      paloInferior.className = "palos__footer palos pica";
    } else if (paloAleatorio === "♥") {
      paloSuperior.className = "palos heart";
      paloInferior.className = "palos__footer palos heart";
    } else if (paloAleatorio === "♦") {
      paloSuperior.className = "palos diamond";
      paloInferior.className = "palos__footer palos diamond";
    } else {
      paloSuperior.className = "palos trebol";
      paloInferior.className = "palos__footer palos trebol";
    }

    paloSuperior.innerHTML = paloAleatorio;
    numeroAleatorio.innerHTML = valorAleatorio;
    paloInferior.innerHTML = paloAleatorio;
  }
  // Ejemplo de uso:
  const button = document.querySelector("#btn__card");
  button.addEventListener("click", () => {
    generarCartaAleatoria();
  });
};
