$(document).ready(function(){
  // const APIKEY = "63d670813bc6b255ed0c43ff";  
  const APIKEY = "63de1cc23bc6b255ed0c463a";

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
        if (key != "user"){
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
        }
        else{
          i += 1
        }
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
      var shippingFee = 4
      let cartItems = $('.detail .wrapper');
      for (var i = 0; i < cartItems.length; i++){
        let itemContainer = cartItems[i];
        let priceString = itemContainer.querySelector('#price').innerHTML;
        let price = parseFloat(priceString.replace('$',''))
        let quantity = parseInt(itemContainer.querySelector('#quantity').innerHTML);
        subtotal = parseFloat((subtotal + (price * quantity)).toFixed(2))
        tax = subtotal * parseFloat(0.07)
        total = subtotal + tax + shippingFee - parseFloat(points/100)
      }
      document.querySelector('#subtotal').innerHTML = subtotal
      
      document.querySelector('#points').innerHTML = "-"+(points/100).toFixed(2)
      document.querySelector('#tax').innerHTML = tax.toFixed(2)
      document.querySelector('#shipping').innerHTML = shippingFee.toFixed(2)
      document.querySelector('#total').innerHTML = total.toFixed(2)
      }  
      
    getPoints()
    function getPoints(){
      
      // var points = 0
      var name = JSON.parse(localStorage.getItem("user"))
      // GET request
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://idasg2-bd89.restdb.io/rest/signup?q={"username":"${name}"}`,
        "method": "GET",
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        }
      }
      $.ajax(settings).done(function (response){
        points = parseFloat(response[0].points).toFixed(2)
        updateTotal()
      }) 
    }

    // Checkout event listener
    
    // Earn points after checkout
    addPoints()
    function addPoints(){
      var name = JSON.parse(localStorage.getItem("user"))
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://idasg2-bd89.restdb.io/rest/signup?q={"username":"${name}"}`,
        "method": "GET",
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
      }
      $.ajax(settings).done(function (response){
        console.log(response)
        points = Math.round(parseFloat(document.querySelector('#total').innerHTML))
        // console.log(points)
        var newPoints = response[0].points += points
        console.log(newPoints)
        var id = response[0]._id,
        jsondata = {
          username : response[0].username,
          email : response[0].email,
          password : response[0].password,
          points : newPoints,
          address : response[0].address,
          dob : response[0].dob,
        }

        var settings = {
          "async": true,
          "crossDomain": true,
          "url": `https://idasg2-bd89.restdb.io/rest/signup/${id}`,
          "method": "PUT",
          "headers": {
              "content-type": "application/json",
              "x-apikey": APIKEY,
              "cache-control": "no-cache"
          },
          "processData": false,
          "data": JSON.stringify(jsondata),
          }
      
          $.ajax(settings).done(function (response) {
            alert("Points added")
          });
        
      }) 
    }
      
    } 
  )
