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
              console.log(title, price, imageSrc)
              
              // if (localStorage.getItem("itemsData") !== null) {
              //     itemsData = JSON.parse(localStorage.getItem("itemsData"));
              //     }
              var quantity = 1;
              let newData = new Data(price, imageSrc, quantity);
              localStorage.setItem(title, JSON.stringify(newData))
          }
          function Data(price, imageSrc, quantity) {
                this.price = price;
                this.imageSrc = imageSrc;
                this.quantity = quantity;
            }

        })
      })

          // add data of selected items to local storage after user clicked on add to cart button
      // function addToCartClicked(event){
      //     var button = event.target
      //     var title = button.parentElement.nextElementSibling.nextElementSibling.querySelector('.product-description').innerText
      //     var price = button.parentElement.nextElementSibling.nextElementSibling.querySelector('.price').innerText
      //     var imageSrc = button.parentElement.nextElementSibling.querySelector('.imageLink').src
      //     console.log(title, price, imageSrc)
      //     var quantity = 1
      //     let itemsData = []
          
      //     if (localStorage.getItem("itemsData") !== null) {
      //     itemsData = JSON.parse(localStorage.getItem("itemsData"));
      //     }

      //     if (itemsData.some((item) => item.title === title)) {
      //     alert("Item has been added.")
      //     return
      //     }

      //     let newData = new Data(title, price, imageSrc, quantity);

        // add newData to itemsData and store itemsData in local storage
    //     itemsData.push(newData);
    //     console.log(newData)
    //     localStorage.setItem("itemsData", JSON.stringify(itemsData));
    // }
  
