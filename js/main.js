var doc_education_old = [];
var doc_hospital_old = [];
var award_old = [];
var selected = [];
$(document).ready(function() {
  //  var L = localStorage.getItem("login");
//    console.log(L);
    var speclizationAPI = "http://meerkat.buzz4healthtest.c66.me/api/v1/users/tushargupta.json";
  $.getJSON( speclizationAPI, {
    format: "json"
  })
    .done(function( data ) {
    //    console.log(data.user.name);
      //  console.log(data.user.doc_professional_statement);
    $('#doc_name').attr("value",data.user.name).appendTo("doc_name"); 
        
        
    $('#doc_summary').attr("value",data.user.doc_professional_statement).appendTo("doc_summary"); 
        
        
        doc_education_old = data.user.doc_education; 
        if(data.user.doc_education == ''){
        data.user.doc_education = "Add your Education";
        } 
    $("#doc_education").attr("value",data.user.doc_education).appendTo("doc_education"); 
        
        
          doc_hospital_old = data.user.hospital_affiliations;
        if(data.user.hospital_affiliations == ''){
        data.user.hospital_affiliations= "Add your Hospital Affiliations";
        $("#doc_hospital").attr("placeholder","Add your Hospital Affiliations").appendTo("doc_hospital");
        }
        else{
    $("#doc_hospital").attr("value",data.user.hospital_affiliations).appendTo("doc_hospital");
        }
  
        
        award_old = data.user.doc_award_and_publication;
        if(data.user.doc_award_and_publication == ''){
        data.user.doc_award_and_publication = "Add your Awards and Publications";
        $("#doc_awards").attr("placeholder","Add your Awards and Publications").appendTo("doc_awards");
        } 
        else {
    $("#doc_awards").attr("value",data.user.doc_award_and_publication).appendTo("doc_awards");
        }
        $("#photo").attr("src", data.user.avatar_url).appendTo("#photo");
        
});

     });


 var selected_tags = [];
var selected_speci = [];
var all_tags = [];
var all_speci = [];
var notselected_speci = [];
var notselected_tags = [];
var k=0;
$(document).on('pageinit', '#button11', function(){      
    var url = "http://meerkat.buzz4healthtest.c66.me/api/v1/users/tushargupta.json";        
  //  console.log("HELLO");
    $.ajax({
        url: url ,
        dataType: "json",
        async: true,
        success: function (result) {
            ajax1.parseJSON(result);
        },
        error: function (request,error) {
            alert('Network error has occurred please try again!');
        }
    });         
});
$(document).on('pagebeforecreate', '#headline', function(){
    console.log("hello");
    $('#rm_tags').empty();
    $.each(selected_tags, function(i, row) {
        
            $('#rm_tags').append('<input type="checkbox" id="checkbox-'+i+'a" value = "'+selected_tags[i]+'"class="custom"><label for="checkbox-'+i+'a">'+selected_tags[i]+'</label>');
      // $("input[type='checkbox']").checkboxradio('refresh');
      // $('#checkbox-'+i+'a').prop('checked',true).checkboxradio('refresh');              
        $('input[type=checkbox]').attr('checked',true).checkboxradio().trigger('create');                
        
    });
});


var ajax1 = {  
    parseJSON:function(result){  
        //movieInfo.result = result.results;
        $.each(result.tags, function(i, row) {
       //     console.log(row);
            selected_tags.push(row);
           // console.log(JSON.stringify(row));
        });
        
    //        console.log(result.user.specializations);
          //  selected_tags.push(row);
           // console.log(JSON.stringify(row));
     //  console.log(selected_tags);
    }
}

$(document).on('pageinit', '#button11', function(){      
    var url = "http://meerkat.buzz4healthtest.c66.me/questions/tags.json";        
  //  console.log("HELLO");
    $.ajax({
        url: url ,
        dataType: "json",
        async: true,
        success: function (result) {
            ajax2.parseJSON(result);
        },
        error: function (request,error) {
            alert('Network error has occurred please try again!');
        }
    });         
});
$(document).on('pagebeforecreate', '#headline1', function(){
    console.log("hello");
    $('#add_tags').empty();
    $.each(notselected_tags, function(i, row) {
        
            $('#add_tags').append('<input type="checkbox" id="checkbox-'+i+'a" class="custom" value="'+notselected_tags[i]+'"><label for="checkbox-'+i+'a">'+notselected_tags[i]+'</label>');
      // $("input[type='checkbox']").checkboxradio('refresh');
      // $('#checkbox-'+i+'a').prop('checked',true).checkboxradio('refresh');              
        $('input[type=checkbox]').attr('checked',false).checkboxradio().trigger('create');                
        
    });
});

var ajax2 = {  
    parseJSON:function(result){  
        //movieInfo.result = result.results;
        $.each(result, function(i, row) {
         //   console.log(row.name);
            all_tags.push(row.name);
           // console.log(JSON.stringify(row));
        });
     //  console.log(all_tags);
        for(i=0;i<all_tags.length;i++){
            var c=0;
        for(j=0;j<selected_tags.length;j++){
        if(all_tags[i] == selected_tags[j]){
        c=1;
     //      console.log("aaya");
        break;
        }
        }
        if(c==0){
        notselected_tags[k] = all_tags[i];
            k++;
        }
        }
      // console.log(all_tags);
     //  console.log(notselected_tags);  
    }
   
}


$(document).on('pageinit', '#button11', function(){      
    var speclizationAPI = "http://meerkat.buzz4healthtest.c66.me/api/v1/users/tushargupta.json";
  $.getJSON( speclizationAPI, {
    format: "json"
  })
   .done(function( data ) {
      var array = JSON.parse(data.user.specializations);
      for (var i = 0; i < array.length; i++) {
          selected_speci.push(array[i].name);
          //Do something
      }
       //console.log(data.user.specializations); 
       
       
    });        
});
$(document).on('pagebeforecreate', '#headline3', function(){
    console.log("hello");
    $('#remove_speci').empty();
    $.each(selected_speci, function(i, row) {
        
            $('#remove_speci').append('<input type="checkbox" id="checkbox-'+i+'a" value="'+selected_speci[i]+'" class="custom"><label for="checkbox-'+i+'a">'+selected_speci[i]+'</label>');
      // $("input[type='checkbox']").checkboxradio('refresh');
      // $('#checkbox-'+i+'a').prop('checked',true).checkboxradio('refresh');              
        $('input[type=checkbox]').attr('checked',true).checkboxradio().trigger('create');                
        
    });
});



$(document).on('pageinit', '#button11', function(){      
    var url = "http://meerkat.buzz4healthtest.c66.me/specializations.json";        
   // console.log("HELLO");
    $.ajax({
        url: url ,
        dataType: "json",
        async: true,
        success: function (result) {
            ajax4.parseJSON(result);
        },
        error: function (request,error) {
            alert('Network error has occurred please try again!');
        }
    });         
});
$(document).on('pagebeforecreate', '#headline2', function(){
    console.log("hello");
    $('#add_speci').empty();
    $.each(notselected_speci, function(i, row) {
        console.log(notselected_speci[i]);
        
            $('#add_speci').append('<input type="checkbox" id="checkbox-'+i+'a" value="'+notselected_speci[i]+'" class="custom"><label for="checkbox-'+i+'a">'+notselected_speci[i]+'</label>');
      // $("input[type='checkbox']").checkboxradio('refresh');
      // $('#checkbox-'+i+'a').prop('checked',true).checkboxradio('refresh');              
        $('input[type=checkbox]').attr('checked',false).checkboxradio().trigger('create');                
        
    });
});

var ajax4 = {  
    parseJSON:function(result){
        var l = 0;
         $.each(result, function(i, row) {
         //   console.log(row.name);
            all_speci.push(row.name);
           // console.log(JSON.stringify(row));
        });
        //movieInfo.result = result.results;
     //  console.log(all_tags);
        for(i=0;i<all_speci.length;i++){
            var c=0;
        for(j=0;j<selected_speci.length;j++){
        if(all_speci[i] == selected_speci[j]){
        c=1;
           console.log("aaya");
        break;
        }
        }
        if(c==0){
        notselected_speci[l] = all_speci[i];
            l++;
        }
        }
   //     console.log(all_speci);
     //   console.log(notselected_speci);
 //   console.log(selected_speci);
    }
}

var auth_token = localStorage.getItem("auth_token");
function send_name(){
var a = document.getElementById('doc_name').value;
console.log(a);
console.log(auth_token);

$.ajax({
        type: 'put',
        url: 'http://meerkat.buzz4healthtest.c66.me//users/update.json', 
        data: JSON.stringify({ user:{name:a,auth_token:auth_token}}),
	contentType: 'application/json',
        dataType: 'json',
        crossDomain: true,
        success : function(data) {
            alert("Your Name Suessfully Updated");
     },
        error: function(jqXHR, textStatus, errorThrown) { alert(textStatus+" "+errorThrown); }
        });

}
function send_summary(){
var b = document.getElementById('doc_summary').value;
console.log(b);
console.log(auth_token);

$.ajax({
        type: 'put',
        url: 'http://meerkat.buzz4healthtest.c66.me//users/update.json', 
        data: JSON.stringify({ user:{doc_professional_statement:b,auth_token:auth_token}}),
	contentType: 'application/json',
        dataType: 'json',
        crossDomain: true,
        success : function(data) {
            alert("Your Professional Statement Suessfully Updated");
     },
        error: function(jqXHR, textStatus, errorThrown) { alert(textStatus+" "+errorThrown); }
        });

}
function send_education(){
var c = document.getElementById('doc_education').value;
var d = doc_education_old+","+c;
    console.log(d);

$.ajax({
        type: 'put',
        url: 'http://meerkat.buzz4healthtest.c66.me//users/update.json', 
        data: JSON.stringify({ user:{doc_eduation_list:d,auth_token:auth_token}}),
	contentType: 'application/json',
        dataType: 'json',
        crossDomain: true,
        success : function(data) {
            alert("Your Educational Details Suessfully Updated");
     },
        error: function(jqXHR, textStatus, errorThrown) { alert(textStatus+" "+errorThrown); }
        });

}
function send_hospital(){
var c = document.getElementById('doc_hospital').value;
var d = doc_hospital_old+","+c;
    console.log(d);

$.ajax({
        type: 'put',
        url: 'http://meerkat.buzz4healthtest.c66.me//users/update.json', 
        data: JSON.stringify({ user:{hospital_affiliations_list:d,auth_token:auth_token}}),
	contentType: 'application/json',
        dataType: 'json',
        crossDomain: true,
        success : function(data) {
            alert("Your Hospital Affiliations Suessfully Updated");
     },
        error: function(jqXHR, textStatus, errorThrown) { alert(textStatus+" "+errorThrown); }
        });

}
function send_awards(){
var c = document.getElementById('doc_awards').value;
var d = award_old+","+c;
    console.log(d);

$.ajax({
        type: 'put',
        url: 'http://meerkat.buzz4healthtest.c66.me//users/update.json', 
        data: JSON.stringify({ user:{doc_award_and_publication_list:c,auth_token:auth_token}}),
	contentType: 'application/json',
        dataType: 'json',
        crossDomain: true,
        success : function(data) {
            alert("Your Awards & Publiations Suessfully Updated");
     },
        error: function(jqXHR, textStatus, errorThrown) { alert(textStatus+" "+errorThrown); }
        });

}

function send_addtags(){
    console.log("HELLo");

console.log(auth_token);
   var c = [];
    $(".custom:checked").each(function() {
		c.push($(this).val());
	});
     console.log(c);

$.ajax({
        type: 'get',
        url: 'http://meerkat.buzz4healthtest.c66.me//users/follow_tags.json', 
        data: ({tags:c,auth_token:auth_token}),
	contentType: 'application/json',
        dataType: 'json',
        crossDomain: true,
        success : function(data) {
            alert("Your Tags Successfully added");
            window.location.href = "#button11";
     },
        error: function(jqXHR, textStatus, errorThrown) { alert(textStatus+" "+errorThrown); }
        });

}


function send_removetags(){
    var k=0;
    console.log("HELLo");

console.log(auth_token);
   var p = [];
    var d = [];
    $(".custom:checked").each(function() {
		p.push($(this).val());
	});
    
    for(i=0;i<selected_tags.length;i++){
            var c=0;
        for(j=0;j<p.length;j++){
        if(selected_tags[i] == p[j]){
        c=1;
           console.log("aaya1");
        break;
        }
        }
        if(c==0){
        d[k] = selected_tags[i];
            k++;
        }
        }
     console.log(p);

$.ajax({
        type: 'get',
        url: 'http://meerkat.buzz4healthtest.c66.me//users/unfollow_tags.json', 
        data: ({tags:d,auth_token:auth_token}),
	contentType: 'application/json',
        dataType: 'json',
        crossDomain: true,
        success : function(data) {
            alert("Your Tags Removed Successfully");
            window.location.href = "#button11";
     },
        error: function(jqXHR, textStatus, errorThrown) { alert(textStatus+" "+errorThrown); }
        });

}


function send_addtags(){
    console.log("HELLo");

console.log(auth_token);
   var c = [];
    $(".custom:checked").each(function() {
		c.push($(this).val());
	});
     console.log(c);

$.ajax({
        type: 'get',
        url: 'http://meerkat.buzz4healthtest.c66.me//users/follow_tags.json', 
        data: ({tags:c,auth_token:auth_token}),
	contentType: 'application/json',
        dataType: 'json',
        crossDomain: true,
        success : function(data) {
            alert("Your Tags Successfully added");
            window.location.href = "#button11";
     },
        error: function(jqXHR, textStatus, errorThrown) { alert(textStatus+" "+errorThrown); }
        });

}

function send_removespeci(){
    var k=0;
    console.log("HELLo");

console.log(auth_token);
   var p = [];
    var d = [];
    $(".custom:checked").each(function() {
		p.push($(this).val());
	});
    
    for(i=0;i<selected_speci.length;i++){
            var c=0;
        for(j=0;j<p.length;j++){
        if(selected_speci[i] == p[j]){
        c=1;
           console.log("aaya1");
        break;
        }
        }
        if(c==0){
        d[k] = selected_speci[i];
            k++;
        }
        }
     console.log(d);

$.ajax({
        type: 'get',
        url: 'http://meerkat.buzz4healthtest.c66.me//users/update.json', 
        data: JSON.stringify({user:{bio_removed:d,auth_token:auth_token}}),
	contentType: 'application/json',
        dataType: 'json',
        crossDomain: true,
        success : function(data) {
            alert("Your Specilizations has been successfully Removed");
            window.location.href = "#button11";
     },
        error: function(jqXHR, textStatus, errorThrown) { alert(textStatus+" "+errorThrown); }
        });

}


function send_addspeci(){
    var k=0;
    console.log("HELLo");

console.log(auth_token);
   var p = [];
    var d = [];
    $(".custom:checked").each(function() {
		p.push($(this).val());
	});
    
   
     console.log(p);

$.ajax({
        type: 'put',
        url: 'http://meerkat.buzz4healthtest.c66.me//users/update.json', 
        data: JSON.stringify({user:{bio:p,auth_token:auth_token}}),
	contentType: 'application/json',
        dataType: 'json',
        crossDomain: true,
        success : function(data) {
            alert("Your Specilizations has been successfully added");
            window.location.href = "#button11";
     },
        error: function(jqXHR, textStatus, errorThrown) { alert(textStatus+" "+errorThrown); }
        });

}