jQuery(function(cash) {
  $( "#send" ).click(function() {
      var a = document.getElementById("email").value;
       console.log(a);
  $.ajax({
     url: "http://meerkat.buzz4healthtest.c66.me/users/password.json",
     type: 'POST',
     data: JSON.stringify({ user:{ email: a}}),
     contentType: 'application/json',
     dataType: 'json',
     cache: false,
     crossDomain: true,
     async: false,
     success : function(data) {
  alert("Your password has been sent to Your Email");
     },
     error: function(jqXHR, textStatus, errorThrown) { alert(textStatus+" "+errorThrown); }
  });
  });
});