function toggleForm(){
    section = document.querySelector('.section');
    container = document.querySelector('.container');
    container.classList.toggle('active');
}

$(document).ready(function(){
    const APIKEY = "63d670813bc6b255ed0c43ff";    
    
    // Submit sign up form
    $("#signup-btn").on("click", function(e){
        //e.preventDefault(); //dont submit first

        //get data and POST
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
        console.log(response);
        });
    })
    
});
