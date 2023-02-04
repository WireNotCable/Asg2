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
  
$(document).ready(function(){
      const APIKEY = "63d670813bc6b255ed0c43ff";  

      var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://idasg2-ba66.restdb.io/rest/products",
          "method": "GET",
          "headers": {
              "content-type": "application/json",
              "x-apikey": APIKEY,
              "cache-control": "no-cache"
          }
      }
      let content = "";
      $.ajax(settings).done(function(response){
          for(var i=0; i < response.length; i++){
              content = `<div class="box">
              <div class="icons">
                <button class="fas fa-shopping-cart"></button>
                <button class="fas fa-heart"></button>
                <button class="fas fa-eye"></button>
              </div>
              <div class="image">
                <img class="imageLink" src="${response[i].imageName}" alt="">
              </div>
              <div class="content">
                <h3 class="product-description">${response[i].itemName}</h3>
                <div class="price">$${response[i].price}</div>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
              </div>
            </div>`
            $(".products-container").append(content);
          }

          // event listener for add to cart
          var addToCartButtons = document.querySelectorAll(".fa-shopping-cart")
          console.log(addToCartButtons)
          for (var i = 0; i < addToCartButtons.length; i++){
            var button = addToCartButtons[i]
            button.addEventListener('click',addToCartClicked)
          }

          // add data of selected items to local storage after user clicked on add to cart button
          function addToCartClicked(event){
              var button = event.target
              var title = button.parentElement.nextElementSibling.nextElementSibling.querySelector('.product-description').innerText
              var price = button.parentElement.nextElementSibling.nextElementSibling.querySelector('.price').innerText
              var imageSrc = button.parentElement.nextElementSibling.querySelector('.imageLink').src

              // if item not in local storage, add item to local storage
              if (localStorage.getItem(title) == null){
                var quantity = 1;
                let newData = new Data(price, imageSrc, quantity);
                localStorage.setItem(title, JSON.stringify(newData))
              }
              // if item in local storage, add 1 to quantity
              else{
                console.log("not null")
                let value = JSON.parse(localStorage.getItem(title));
                value.quantity += 1;
                let newData = new Data(price, imageSrc, value.quantity);
                localStorage.setItem(title, JSON.stringify(newData))
              }
              
          }
          function Data(price, imageSrc, quantity) {
                this.price = price;
                this.imageSrc = imageSrc;
                this.quantity = quantity;
            }

        })
      })
