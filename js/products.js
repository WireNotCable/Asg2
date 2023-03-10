
$(document).ready(function(){
      // const APIKEY = "63d670813bc6b255ed0c43ff";  
      const APIKEY = "63de1cc23bc6b255ed0c463a";
      
      // All products
      var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://idasg2-bd89.restdb.io/rest/products",
          "method": "GET",
          "headers": {
              "content-type": "application/json",
              "x-apikey": APIKEY,
              "cache-control": "no-cache"
          }
      }
      let content = "";
      $.ajax(settings).done(function(response){
          var searchValue = localStorage.getItem("searchValue");
          var product_avail = false;
          for(var i=0; i < response.length; i++){
            if (localStorage.getItem("searchValue") == null){
              var searchValue = ''
            }
            if(response[i].itemName.toLowerCase().includes(searchValue.toLowerCase())){
              product_avail = true;
              content = `<div class="box" id="${response[i].itemName}">
              <div class="icons">
                <button class="fas fa-shopping-cart"></button>
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
          window.localStorage.setItem('searchValue', '');
        }
        if(product_avail == false){
          alert("Product not found!")
        }
          addToCart()
      })


      // Filter
      var selectCatButtons = document.querySelectorAll(".filter-btn")
      for (var i = 0; i < selectCatButtons.length; i++){
        var button = selectCatButtons[i]
        button.addEventListener('click',function(){
          var id = this.id;
          console.log(id)
          catSelected(id)
        })
      }
      function catSelected(id){
        console.log(id)
        $(".products-container").empty();
        var settings = {
          "async": true,
          "crossDomain": true,
          "url": `https://idasg2-bd89.restdb.io/rest/products?q={"category":"${id}"}`,
          "method": "GET",
          "headers": {
              "content-type": "application/json",
              "x-apikey": APIKEY,
              "cache-control": "no-cache"
          }
      }
      $.ajax(settings).done(function(response){
        console.log(response)
        for(var i=0; i < response.length; i++){
          content = `<div class="box">
          <div class="icons">
            <button class="fas fa-shopping-cart"></button>
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
        addToCart()
      })
    }


    function addToCart(){
      // event listener for add to cart
      var addToCartButtons = document.querySelectorAll(".fa-shopping-cart")
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
    }
  }) 

