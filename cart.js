$(document).ready(function(){

    // selecting of payment method
    var creditCardSelected = document.querySelector("#creditcard");
    var creditCardCheckmark = document.querySelector("#creditcard .checkmark");
    var payPalSelected = document.querySelector("#paypal");
    var payPalCheckmark = document.querySelector("#paypal .checkmark");

    document.querySelector('#creditcard').addEventListener("click", function(){
        creditCardSelected.classList.add('selected')
        creditCardCheckmark.classList.add('fill')
        payPalSelected.classList.remove('selected')
        payPalCheckmark.classList.remove('fill')
    });
    document.querySelector('#paypal').addEventListener("click", function(){
        payPalSelected.classList.add('selected')
        payPalCheckmark.classList.add('fill')
        creditCardSelected.classList.remove('selected')
        creditCardCheckmark.classList.remove('fill')
    });

    function getAndParseAllLocalStorage() {
      let values = [];
      for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = JSON.parse(localStorage.getItem(key));
        values.push({ key, value });

        var contents = `
        <div class="product-card">
            <div class="card">
              <div class="img-box">
                <img src="${value.imageSrc}" alt="${key}" width="80px" class="product-img">
              </div>
              <div class="detail">
                <h4 class="product-name">${key}</h4>
                <div class="wrapper">
                  <div class="product-qty">
                    <button id="decrement">
                      <ion-icon name="remove-outline"></ion-icon>
                    </button>
                    <span id="quantity">${value.quantity}</span>
                    <button id="increment">
                      <ion-icon name="add-outline"></ion-icon>
                    </button>
                  </div>
                  <div class="price">
                    $ <span id="price">${value.price}</span>
                  </div>
                </div>
              </div>
              <button class="product-close-btn">
                <ion-icon name="close-outline"></ion-icon>
              </button>
            </div>
          </div>
        `
        $(".cart-item-box").append(contents)
      }
    }

    getAndParseAllLocalStorage()

    
    var removeCartItemButtons = document.querySelectorAll(".product-close-btn")
    for (var i = 0; i<removeCartItemButtons.length; i++){
      
    }
      
    }
  )
    

    



    // var removeCartItemButtons = document.querySelectorAll(".product-close-btn")
    // for (var i = 0; i<removeCartItemButtons.length; i++){
    //   var button = removeCartItemButtons[i]
    //   button.addEventListener('click', function(event){
    //     var buttonClicked = event.target
    //     buttonClicked.parentElement.parentElement.parentElement.remove()
    //     updateStorage()
    //   })
    // }

    // clear local storage and add existing items back
    // function updateStorage(){
    //   localStorage.clear()
    //   var items = document.querySelectorAll(".product-card")
    //   let itemsData = []
    //   for (var i = 0; i < items.length; i++){
    //     var title = items[i].querySelector('.product-name').innerText
    //     var price = items[i].querySelector('#price').innerText
    //     var imageSrc = items[i].querySelector('img').src
    //     var quantity = items[i].querySelector('#quantity').innerText
    //     let newData = new Data(title, price, imageSrc, quantity)
    //     itemsData.push(newData)
    //   }
    //   localStorage.setItem("itemsData", JSON.stringify(itemsData));
    // }

    // function Data(title, price, imageSrc, quantity) {
    //   this.title = title;
    //   this.price = price;
    //   this.imageSrc = imageSrc;
    //   this.quantity = quantity;
    // }
