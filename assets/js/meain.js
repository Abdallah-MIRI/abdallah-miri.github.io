const btnMenu = document.getElementById("btn-menu");
const bodyEffect = document.getElementById("body-effect");

document.addEventListener("DOMContentLoaded", () => {
  btnMenu.addEventListener("click", () => {
    bodyEffect.classList.toggle("body-hidden");
  });
});
