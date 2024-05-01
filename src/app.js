/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  document.querySelector("#excuse").innerHTML = excuseGen();
};

function excuseGen() {
  let who = [
    "El mentor H.Q.",
    "Camila Fernandez",
    "Mi exorcista",
    "La Anyhara"
  ];
  let action = ["bailo", "bebio", "estuvo", "boxeo"];
  let what = ["con los nazis", "junto al Papa Benedicto", "con Marlon Brando"];
  let when = [
    "por consecuencia no fue a la clase del lunes",
    "cuando el Franco fue nombrado ministro de los pokemones",
    "mientras tomaba votos de castidad",
    "durante el nacimiento de una nueva constelacion",
    "en tanto el alcohol hablara en el nombre del amor"
  ];
  let who1 = Math.floor(Math.random() * who.length);
  let action1 = Math.floor(Math.random() * action.length);
  let what1 = Math.floor(Math.random() * what.length);
  let when1 = Math.floor(Math.random() * when.length);

  return `${who[who1]} ${action[action1]} ${what[what1]} ${when[when1]}`;
}
