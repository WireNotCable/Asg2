$(document).ready(function(){
  var searchForm = document.querySelector(".search-form");
  document.querySelector('#search-btn').addEventListener("click", function(){
      searchForm.classList.toggle('active');
      navbar.classList.remove('active');
  });

  var navbar = document.querySelector('.navbar');
  document.querySelector('#menu-btn').addEventListener("click", function(){
      navbar.classList.toggle('active');
      searchForm.classList.remove('active');
  });

  window.onscroll = function() {
      searchForm.classList.remove('active');
      navbar.classList.remove('active');
  }
});



  $(document).ready(function(){
    $('.navbar-toggler').click(function(){
        $('.navbar-collapse').slideToggle(300);
    });
    
    smallScreenMenu();
    let temp;
    function resizeEnd(){
        smallScreenMenu();
    }
  
    $(window).resize(function(){
        clearTimeout(temp);
        temp = setTimeout(resizeEnd, 100);
        resetMenu();
    });
  });
  
  
  const subMenus = $('.sub-menu');
  const menuLinks = $('.menu-link');
  
  function smallScreenMenu(){
    if($(window).innerWidth() <= 992){
        menuLinks.each(function(item){
            $(this).click(function(){
                $(this).next().slideToggle();
            });
        });
    } else {
        menuLinks.each(function(item){
            $(this).off('click');
        });
    }
  }
  
  function resetMenu(){
    if($(window).innerWidth() > 992){
        subMenus.each(function(item){
            $(this).css('display', 'none');
        });
    }
  }

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
        e.preventDefault();
        
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

            // get value
            var Username = $("#login-username").val();
            var Password = $("#login-password").val();  

            // loop and find if username and password match with any data in the database
            for (var i=0; i < responseList.length; i++){

              if(responseList[i].username == Username && responseList[i].password == Password){
                alert("Login successful.");
                window.location.assign("index.html"); //auto go back to home page
              }
            }
          });
          
          // create user object with username and password to store and responseList
          function User(username, password){
            this.username = username;
            this.password = password;
          }
    })
});
