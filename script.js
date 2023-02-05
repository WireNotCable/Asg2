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

  var login = document.querySelector('.profile-popup');
  document.querySelector('#login-btn').addEventListener("click", function(){
    login.classList.toggle('active');
  });

  window.onscroll = function() {
      searchForm.classList.remove('active');
      navbar.classList.remove('active');
  }
});



  $(document).ready(function(){
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