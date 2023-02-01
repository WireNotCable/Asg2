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
            console.log(response[i].itemName)
            content = `<div class="box">
            <div class="icons">
              <a href="#" class="fas fa-shopping-cart"></a>
              <a href="#" class="fas fa-heart"></a>
              <a href="#" class="fas fa-eye"></a>
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
    
});