let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let menuLinks = document.querySelectorAll('.nav-item__link')

burger.addEventListener('click',
function () {
  burger.classList.toggle('header__burger--active');
  menu.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop-scroll');
}
)

document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-search').addEventListener('click', (e) => {
    document.getElementById('header-search').classList.add('header__search--active')
  })

  document.getElementById('open-search').addEventListener('click', (e) => {
    document.getElementById('header-search--360').classList.add('header__search--active')
  })

  document.getElementById('header-search-close').addEventListener('click', (e) => {
    document.getElementById('header-search').classList.remove('header__search--active')
  })

  document.getElementById('header-search-close--360').addEventListener('click', (e) => {
    document.getElementById('header-search--360').classList.remove('header__search--active')
  })

  document.getElementById('header-search').addEventListener('submit', (e) => {
    e.preventDefault()
  })
})


document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-search').addEventListener('click', (e) => {
    document.getElementById('header-search-input').setAttribute('tabindex', '0')
    document.getElementById('header-search-send').setAttribute('tabindex', '0')
    document.getElementById('header-search-close').setAttribute('tabindex', '0')
    });
  })

  document.addEventListener('DOMContentLoaded', (e) => {
    document.getElementById('open-search').addEventListener('click', (e) => {
      document.getElementById('header-search-input-360').setAttribute('tabindex', '0')
      document.getElementById('header-search-send-360').setAttribute('tabindex', '0')
      document.getElementById('header-search-close--360').setAttribute('tabindex', '0')
      });
    })



menuLinks.forEach(function(elem) {
  elem.addEventListener('click', function() {

    burger.classList.remove('header__burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll')
  })
})

const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  // loop: true,

  pagination: {
  el: '.swiper-pagination',
  clickable: true,
  },
  a11y: {
    slideLabelMessage: 'Фоновое изображение'
  }
})



document.querySelectorAll('.work-list-item__link').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
  const path = e.currentTarget.dataset.path;
  document.querySelectorAll('.work-list-item__link').forEach(function(btn){
  btn.classList.remove('work-list-item__link--active')});
  e.currentTarget.classList.add('work-list-item__link--active');
  document.querySelectorAll('.work-how__tab').forEach(function(tabsBtn){
    tabsBtn.classList.remove('work-how__tab--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('work-how__tab--active');
  } ) })

new Accordion('.accordion-container', {
  // activeClass: 'ac--active'
})

function newFunction() {
  document.addEventListener('DOMContentLoaded'(
    document.getElementById('custom-checkbox').setAttribute('tabindex', '0'))
  );
}

