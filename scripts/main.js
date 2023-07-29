// counter animation
document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  counter("c1", 0, 258, 100);
  counter("c2", 400, 590, 100);
  counter("c3", 0, 28, 100);
});

const menu_open = document.querySelector('.header .left__mobile .menu__icon');
const header_mobile = document.querySelector('.header__mobile');
const menu__container = document.querySelector('.header .left__mobile .menu__container');
const close_header = document.querySelector('.header__mobile .close')

menu_open.onclick = () => {
  menu__container.classList.add('show')
}

close_header.onclick = () => {
  menu__container.classList.remove('show')
}