toggleForm()
function toggleForm(){
  section = document.querySelector('.section');
  container = document.querySelector('.container');
  container.classList.toggle('active');
}
$(document).ready(function(){
    // const APIKEY = "63d670813bc6b255ed0c43ff"; 
    const APIKEY = "63de1cc23bc6b255ed0c463a";
   
    
    // Submit sign up form
    $("#signup-btn").on("click", function(e){
          e.preventDefault(); //dont submit first
          //get data and POST request
          var Username = $("#signup-username").val();
          var Email = $("#signup-email").val();   
          var Password = $("#signup-password").val();
          var ConfirmPassword = $("#signup-confirm-password").val()
          var Address = $("#signup-address").val();
          if (Email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )){
            if (Password == ConfirmPassword){
              $("#passwordNotSame").css('display','none');
              let jsondata = {
                username: Username,
                email: Email,
                password: Password,
                points: 100,
                address: Address,
              }
              var settings = {
              "async": true,
              "crossDomain": true,
              "url": "https://idasg2-bd89.restdb.io/rest/signup",
              "method": "POST",
              "headers": {
                  "content-type": "application/json",
                  "x-apikey": APIKEY,
                  "cache-control": "no-cache"
              },
              "processData": false,
              "data": JSON.stringify(jsondata),
              }
              $.ajax(settings).done(function (response) {
                var player = document.querySelector('#sent');
                player.style.display = "block";
                player.load('https://assets9.lottiefiles.com/private_files/lf30_nsqfzxxx.json');
                player.play()
                player.addEventListener('complete', function() {
                  player.style.display = "none";
                  // alert("Registration successful.");
                });
                });
            }
            else{
              alert("Please enter matching passwords")
            }
          }
          else{
            alert("Invalid email")
          }
      })

    // Submit log in form
    $("#login-btn").on("click", function(e){
      e.preventDefault();        

      // get value
      var Username = $("#login-username").val();
      var Password = $("#login-password").val();  

      // GET request
      var settings = {
          "async": true,
          "crossDomain": true,
          "url": `https://idasg2-bd89.restdb.io/rest/signup?q={"username":"${Username}"}`,
          "method": "GET",
          "headers": {
            "content-type": "application/json",
            "x-apikey": APIKEY,
            "cache-control": "no-cache"
          }
        }
        
        $.ajax(settings).done(function (response) {
          if (response.length === 0){
            alert("Account does not exist. Please sign up.");
          }
          else if (response[0].password != Password){
            alert("Incorrect password.");
          }
          else{
            var player = document.querySelector('#submit-log-in');
                player.style.display = "block";
                player.load('https://assets3.lottiefiles.com/private_files/lf30_kth591yp.json');
                player.play()
                player.addEventListener('complete', function() {
                  player.style.display = "none";
                  alert("Login successful.");
                  localStorage.setItem("user", JSON.stringify(response[0].username));
                  window.location.assign("index.html"); //auto go back to home page
                });
          }
        });  
    })
})
    
    
  
