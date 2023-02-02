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
              <button href="#" class="fas fa-heart"></button>
              <button href="#" class="fas fa-eye"></button>
            </div>
            <div class="image">
              <img src=${response[i].imageName}" alt="">
            </div>
            <div class="content">
              <h3>${response[i].itemName}</h3>
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
        
    })




    // event listener for add to cart
    var addToCartButtons = document.querySelectorAll(".add-to-cart-btn")
    for (var i = 0; i < addToCartButtons.length; i++){
      var button = addToCartButtons[i]
      button.addEventListener('click',addToCartClicked)
    }
    
});