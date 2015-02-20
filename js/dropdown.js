
(function() {
  var speclizationAPI = "http://meerkat.buzz4healthtest.c66.me/specializations.json";
  $.getJSON( speclizationAPI, {
    format: "json"
  })
    .done(function( data ) {
         var listItems= "";
      $.each( data, function( i, item ) {
          
           listItems+= "<option value='" + item.name + "'>" + item.name + "</option>";
          
        if ( i === data.length-1) {
          return false;
        }
      });
      //  console.log(listItems);
        $("#day").html(listItems);
    });
})();