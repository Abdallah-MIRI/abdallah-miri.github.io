const btnMenu = document.getElementById("btn-menu");
const bodyEffect = document.getElementById("body-effect");

document.addEventListener("DOMContentLoaded", () => {
  btnMenu.addEventListener("click", () => {
    bodyEffect.classList.toggle("body-hidden");
  });
});


document.querySelectorAll('pre').forEach((el) => {
    // إنشاء الحاوية
    const wrapper = document.createElement('div');
    wrapper.className = 'code-window';
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
  });