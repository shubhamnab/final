var tags = [];
var speci_selected = new Array();
var speci_all = new Array();
$(document).ready(function() {
    var L = localStorage.getItem("login");
    console.log(L);
    var speclizationAPI = "http://meerkat.buzz4healthtest.c66.me/api/v1/users/tushargupta.json";
  $.getJSON( speclizationAPI, {
    format: "json"
  })
    .done(function( data ) {
     //   console.log("hello1");
    //     var listItems= [];
       $('#username').html( data.user.name );
      //  console.log(data.user.name);
    $('#summary').html(data.user.doc_professional_statement);
    $('#name').attr("value",data.user.name).appendTo("name");
    $('#summary').attr("value",data.user.doc_professional_statement).appendTo("summary");
      $.each( data.tags, function( i, item ) {
         // console.log(data.tags);
    
           speci_selected.push({'value':i,'text':data.tags[i]});
        //  console.log(data.tags);
          
          // listItems+= "<option value='" + item.name + "'>" + item.name + "</option>";
          
        if ( i === data.length-1) {
          return false;
        }
      });
    $("#photo").attr("src", data.user.avatar_url).appendTo("#photo"); 
     //   console.log(speci);
    //    console.log(speci_all);
      //  $("#options").html(tags);
        console.log(tags);
     //console.log(tags[3]);
    
  
});
  
       

     });
    
  