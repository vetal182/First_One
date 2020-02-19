

function ibg() {

  document.querySelectorAll(".ibg").forEach(el => {
    if (el.querySelector('img')) {
      el.style.backgroundImage = 'url(' + el.querySelector('img').getAttribute('src') + ')';
    }
  });
}

ibg();



const menu = document.querySelector('.main-header__menu');
const header = document.querySelector('.main-header')
menu.addEventListener('click', () => {
  header.classList.toggle('open');
})

const headerLink = document.querySelectorAll('.main-header__link');
headerLink.forEach(link => {
  link.addEventListener('click', () => {
    header.classList.remove('open');
  })
})