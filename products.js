$(document).ready(function(){

  setTimeout(function () {
    second();
  }, 0);
  first();


    function first(){
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
              content = `<div class="box hi">
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
    }
    
    function second(){
      // event listener for add to cart
    var boxes = document.querySelectorAll('.hi')
    console.log(boxes)
    console.log('jo')
    var addToCartButtons = document.querySelectorAll(".fa-shopping-cart")
    console.log(addToCartButtons)
    for (var i = 0; i < addToCartButtons.length; i++){
      var button = addToCartButtons[i]
      button.addEventListener('click',addToCartClicked)
    }

    // // event listener for add to cart
    // var addToCartButtons = $("fas fa-shopping-cart add-to-cart-btn")
    // console.log(document.querySelectorAll(".item-box"))
    // console.log(addToCartButtons)
    // for (var i = 0; i < addToCartButtons.length; i++){
    //     var button = addToCartButtons[i]
    //     button.addEventListener('click',addToCartClicked(e))
    // }

    // add data of selected items to local storage after user clicked on add to cart button
    function addToCartClicked(event){
        console.log("clicked");
        var button = event.target
        var shopItem = button.parentElement
        var title = shopItem.querySelector('.product-description').innerText
        var price = shopItem.querySelector('.price').innerText
        var imageSrc = shopItem.querySelector('.imageLink').src
        console.log(title, price, imageSrc)
        var quantity = 1
        let itemsData = []
        
        if (localStorage.getItem("itemsData") !== null) {
        itemsData = JSON.parse(localStorage.getItem("itemsData"));
        }

        if (itemsData.some((item) => item.title === title)) {
        alert("Item has been added.")
        return
        }

        let newData = new Data(title, price, imageSrc, quantity);

        // add newData to itemsData and store itemsData in local storage
        itemsData.push(newData);
        localStorage.setItem("itemsData", JSON.stringify(itemsData));
    }
    
    function Data(title, price, imageSrc, quantity) {
        this.title = title;
        this.price = price;
        this.imageSrc = imageSrc;
        this.quantity = quantity;
    }
    }


    
    
});