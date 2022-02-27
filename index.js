var myName = window.prompt("What's your name?");
console.log("Hello",myName);

document.getElementById("gotobutton").onclick = function(){

  var website = document.getElementById("website").value;
  document.getElementById('link').href = `${website}`;
  
}