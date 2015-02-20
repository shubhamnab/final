jQuery(function(cash) {
  $( "#submit" ).click(function() {
      var a = document.getElementById("fullname").value;
      var b = document.getElementById("email").value;
      var c = document.getElementById("profession").value;
      var d = $("#day").val();
      var e = $("#speci").val();
       console.log(a);
      console.log(b);
      console.log(c);
      console.log(d);
      console.log(e);
  $.ajax({
     url: "http://meerkat.buzz4healthtest.c66.me/register.json",
     type: 'POST',
     data: JSON.stringify({ user:{ email: b, name: a, persona: c, preferred_tags: d, specilizations: e}}),
     contentType: 'application/json',
     dataType: 'json',
     cache: false,
     crossDomain: true,
     async: false,
     success : function(data) {
  alert(1);
     },
     error: function(jqXHR, textStatus, errorThrown) 
	 {
	 alert(textStatus+" "+errorThrown);
     window.location.href = "register.html";
	 }
  });
  });
});