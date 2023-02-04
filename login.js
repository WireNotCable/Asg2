function toggleForm(){
    section = document.querySelector('.section');
    container = document.querySelector('.container');
    container.classList.toggle('active');
}

$(document).ready(function(){
    const APIKEY = "63d670813bc6b255ed0c43ff";    
    
    // Submit sign up form
    $("#signup-btn").on("click", function(e){
        e.preventDefault(); //dont submit first

        //get data and POST request
        var Username = $("#signup-username").val();
        var Email = $("#signup-email").val();   
        var Password = $("#signup-password").val();

        let jsondata = {
            username: Username,
            email: Email,
            password: Password,
            points: 100,
        }
        var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://idasg2-ba66.restdb.io/rest/signup",
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
        alert("Registration successful.");
        });
    })
    
    // Submit log in form
    $("#login-btn").on("click", function(e){
        // console.log("hello2")
        e.preventDefault();
        console.log("hello2")
        
        var responseList = [];

        // GET request
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://idasg2-ba66.restdb.io/rest/signup",
            "method": "GET",
            "headers": {
              "content-type": "application/json",
              "x-apikey": APIKEY,
              "cache-control": "no-cache"
            }
          }
          
          $.ajax(settings).done(function (response) {
            for (var i=0; i < response.length; i++){
              responseList.push(new User(response[i].username, response[i].password));
            }
            console.log(responseList)

            // get value
            var Username = $("#login-username").val();
            var Password = $("#login-password").val();  

            // loop and find if username and password match with any data in the database
            for (var i=0; i < responseList.length; i++){

              if(responseList[i].username == Username && responseList[i].password == Password){
                alert("Login successful.");
                // localStorage.setItem("signin", true)
                window.location.assign("index.html"); //auto go back to home page
              }
            }
            // create user object with username and password to store and responseList
            function User(username, password){
              this.username = username;
              this.password = password;
          }
          });
          
          
    })
});
