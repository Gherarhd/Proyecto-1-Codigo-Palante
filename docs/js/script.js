"use strict";

//filtro de opacidad del video
const videoContenedor = document.querySelector("#video-container");
const filtro = document.createElement("div");
filtro.classList.add("overlay");
videoContenedor.appendChild(filtro);

//Efecto sobre cursor

document.addEventListener("mousemove", function (e) {
  const streak = document.querySelector(".comet");
  streak.style.left = e.clientX + "px";
  streak.style.top = e.clientY + "px";
});
