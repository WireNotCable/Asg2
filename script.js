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


    //check which subcat is pressed and store it in local storage
    

});
    







