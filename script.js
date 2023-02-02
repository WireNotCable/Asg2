$(document).ready(function(){
    var searchForm = document.querySelector(".search-form");
    document.querySelector('#search-btn').addEventListener("click", function(){
        searchForm.classList.toggle('active');
        navbar.classList.remove('active');
    });

    var navbar = document.querySelector('.navbar');
    document.querySelector('#menu-btn').addEventListener("click", function(){
        navbar.classList.toggle('active');
        searchForm.classList.remove('active');
    });

    window.onscroll = function() {
        searchForm.classList.remove('active');
        navbar.classList.remove('active');
    }



var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});