document.getElementById("gotobutton").onclick = function(){

  var website = document.getElementById("website").value;
  document.getElementById('link').href = `${website}`;
  
}