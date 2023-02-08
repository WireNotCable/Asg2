$(document).ready(function(){
  var searchForm = document.querySelector(".search-form");
  document.querySelector('#search-btn').addEventListener("click", function(){
      searchForm.classList.toggle('active');
      navbar.classList.remove('active');
      profile.classList.remove('active');
  });

  var navbar = document.querySelector('.navbar');
  document.querySelector('#menu-btn').addEventListener("click", function(){
      navbar.classList.toggle('active');
      searchForm.classList.remove('active');
      profile.classList.remove('active');
  });

  login = localStorage.getItem("user")
  if (login != null){
    var profile = document.querySelector('.profile-popup');
    document.querySelector('#login-btn').addEventListener("click", function(){
      profile.classList.toggle('active');
      navbar.classList.remove('active');
      searchForm.classList.remove('active');
      // GET request
      const APIKEY = "63d670813bc6b255ed0c43ff";  
      var name = JSON.parse(localStorage.getItem("user"))
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://idasg2-ba66.restdb.io/rest/signup?q={"username":"${name}"}`,
        "method": "GET",
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        }
      }
      $.ajax(settings).done(function (response){
        document.querySelector('#profile-name').innerHTML = response[0].username
        document.querySelector('#profile-address').innerHTML = response[0].address
        document.querySelector('#profile-coins').innerHTML = response[0].points
      })

    });
  }
  else{
    var profile = document.querySelector('.login-popup');
    document.querySelector('#login-btn').addEventListener("click", function(){
      profile.classList.toggle('active');
      navbar.classList.remove('active');
      searchForm.classList.remove('active');
    });
  }
  

  window.onscroll = function() {
      searchForm.classList.remove('active');
      navbar.classList.remove('active');
  }


  $('.navbar-toggler').click(function(){
    $('.navbar-collapse').slideToggle(300);
  });
  
  smallScreenMenu();
  let temp;
  function resizeEnd(){
    smallScreenMenu();
  }
  
  $(window).resize(function(){
    clearTimeout(temp);
    temp = setTimeout(resizeEnd, 100);
    resetMenu();
  });
  
  
  const subMenus = $('.sub-menu');
  const menuLinks = $('.menu-link');
  
  function smallScreenMenu(){
  if($(window).innerWidth() <= 992){
    menuLinks.each(function(item){
        $(this).click(function(){
            $(this).next().slideToggle();
        });
    });
  } else {
    menuLinks.each(function(item){
        $(this).off('click');
    });
  }
  }
  
  function resetMenu(){
  if($(window).innerWidth() > 992){
    subMenus.each(function(item){
        $(this).css('display', 'none');
    });
  }
  }
});

// Slides
let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next(){
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

function prev(){
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}


$("#search-logo").on("click", function(e){
  e.preventDefault();

  searchInput = $("#search-input").val();
  localStorage.setItem("searchValue", searchInput);
  window.location.href = "Products.html";
});