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