jQuery(function(cash) {
auth_token = localStorage.getItem('auth_token');
if(auth_token != null)
{
window.location.href = "profile.html";
}
  $( "#login_btn" ).click(function() {
   var x = document.getElementById("email").value;
   var y = document.getElementById("password").value;
      console.log(x);
      console.log(y);
      
 $.ajax({
     url: "http://meerkat.buzz4healthtest.c66.me/api/v1/sessions.json",
     type: 'POST',
     data: JSON.stringify({ user:{ email: x, password: y}}),
     contentType: 'application/json',
     dataType: 'json',
     cache: false,
     crossDomain: true,
     async: false,
     success : function(data,textStatus, jqXHR) {
    var auth_token = data.data.auth_token;
    var login = data.data.login;
    //console.log(login);
    //console.log(auth_token);
         //save
     localStorage.setItem("auth_token", auth_token); // save auth_token
     localStorage.setItem("login", login); // save login
  // Retrieve
  //console.log(localStorage.getItem("auth_token")); // fetch auth_token
  //console.log(localStorage.getItem("login")); // fetch login
   
     window.localStorage["auth_token"] = auth_token;
    
    window.location.href = "profile.html";
     },
     error: function(jqXHR, textStatus, errorThrown) 
	 {
	 alert(textStatus+" "+errorThrown);
     window.location.href = "index.html"	; 
}
	 
  });
  });
});