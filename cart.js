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


    // local storage
    function getAndParseAllLocalStorage() {
      $(".product-card").remove()
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
      
    // Remove item
    var removeCartItemButtons = document.querySelectorAll(".product-close-btn")
    for (var i = 0; i<removeCartItemButtons.length; i++){
      var button = removeCartItemButtons[i]
      button.addEventListener('click', function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.remove()
        key = buttonClicked.parentElement.previousElementSibling.firstElementChild.innerHTML
        localStorage.removeItem(key)
      })
      updateTotal()
    }

    // Add quantity
    var AddQuantityButtons = document.querySelectorAll("#increment")
    for (var i = 0; i < AddQuantityButtons.length; i++){
      var button = AddQuantityButtons[i]
      button.addEventListener('click', function(event){
        var buttonClicked = event.target
        quantity = buttonClicked.parentElement.previousElementSibling.innerHTML
        console.log(quantity)
        buttonClicked.parentElement.previousElementSibling.innerHTML = parseInt(quantity) + 1
        key = buttonClicked.parentElement.parentElement.parentElement.previousElementSibling.innerHTML
        let value = JSON.parse(localStorage.getItem(key));
        value.quantity += 1
        localStorage.setItem(key, JSON.stringify(value));
        updateTotal()
      })
    }

    // Minus quantity
    var MinusQuantityButtons = document.querySelectorAll("#decrement")
    for (var i = 0; i < MinusQuantityButtons.length; i++){
      var button = MinusQuantityButtons[i]
      button.addEventListener('click', function(event){
        var buttonClicked = event.target
        if (buttonClicked.parentElement.nextElementSibling.innerHTML != 0){
          quantity = buttonClicked.parentElement.nextElementSibling.innerHTML
          buttonClicked.parentElement.nextElementSibling.innerHTML = parseInt(quantity) - 1
          key = buttonClicked.parentElement.parentElement.parentElement.previousElementSibling.innerHTML
          let value = JSON.parse(localStorage.getItem(key));
          value.quantity -= 1
          if (value.quantity == 0 || parseInt(quantity)==0){
            value.quantity = 1
            buttonClicked.parentElement.nextElementSibling.innerHTML = 1
          }
          localStorage.setItem(key, JSON.stringify(value));
          updateTotal()
        }
      })
    }

    // Calculate Total
    function updateTotal() {
      var total = 0
      var subtotal = 0
      var tax = 0
      let cartItems = $('.detail .wrapper');
      console.log(cartItems)
      for (var i = 0; i < cartItems.length; i++){
        let itemContainer = cartItems[i];
        let priceString = itemContainer.querySelector('#price').innerHTML;
        let price = parseFloat(priceString.replace('$',''))
        let quantity = parseInt(itemContainer.querySelector('#quantity').innerHTML);
        subtotal = parseFloat((subtotal + (price * quantity)).toFixed(2))
        document.querySelector('#subtotal').innerHTML = subtotal
        
        tax = subtotal * parseFloat(0.07)
        document.querySelector('#tax').innerHTML = tax.toFixed(2)

        let shippingFee = 4;
        document.querySelector('#shipping').innerHTML = shippingFee.toFixed(2)

        total = subtotal + tax + shippingFee
        document.querySelector('#total').innerHTML = total.toFixed(2)
      }
      }  
    updateTotal()
    } 
  )
