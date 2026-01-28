const btnMenu = document.getElementById("btn-menu");
const bodyEffect = document.getElementById("body-effect");
const btn = document.getElementById('btn-menu');

document.addEventListener("DOMContentLoaded", () => {
  btnMenu.addEventListener("click", () => {
  });
  
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    bodyEffect.classList.toggle("body-hidden");
    // هنا تقدر تضيف كود لفتح القائمة نفسها
    // document.getElementById('navbar').classList.toggle('open');
});
});


document.querySelectorAll('pre').forEach((el) => {
    // إنشاء الحاوية
    const wrapper = document.createElement('div');
    wrapper.className = 'code-window';
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
  });