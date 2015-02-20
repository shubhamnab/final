
	function myFunction() {
	var e = document.getElementById("suggestions");
	for (var i = 0; i < e.options.length; i++) {
     if(e.options[i].selected ==true){
          alert(e.options[i].value);
      }
  }
	//window.location = "profile_others.html";
	//console.log(listItem[i]);
	}
	