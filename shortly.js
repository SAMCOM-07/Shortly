const btn = document.querySelector('.hamburger-btn');
const nav = document.querySelector('.hamburger-menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  nav.classList.toggle('block');
  nav.classList.toggle('hidden');
})