"use strict";

//filtro de opacidad del video
const videoContenedor = document.querySelector("#video-container");
const filtro = document.createElement("div");
filtro.classList.add("overlay");
videoContenedor.appendChild(filtro);

//Efecto sobre cursor
const contenedor = document.querySelector("#video-container");
const efectoCursor = document.createElement("div");
efectoCursor.classList.add("cometa");
contenedor.appendChild(efectoCursor);

for (let i = 0; i < 3; i++) {
  const estelaCursor = document.createElement("div");
  estelaCursor.classList.add("trail");
  efectoCursor.appendChild(estelaCursor);
}

document.addEventListener("mousemove", function (e) {
  const cursor = document.querySelector(".cometa");
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
