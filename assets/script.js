window.onload=function() {
  if(localStorage["background"] == "black") {black();}
  if(localStorage["size"] = "big") {increase();}
  if(localStorage["size"] = "small") {decrease();}
  document.getElementById("normal").addEventListener("click", normal);
  document.getElementById("black").addEventListener("click", black);
  document.getElementById("increase").addEventListener("click", increase);
  document.getElementById("decrease").addEventListener("click", decrease);
}

function normal() {
  document.getElementsByTagName("body")[0].classList.remove("black");
  var x = document.getElementsByClassName("change");
  for(var i = 0; i < x.length; i++) {
    x[i].classList.remove("black");
  }
  x = document.getElementsByTagName("a");
  for(var i = 0; i < x.length; i++) {
    x[i].classList.remove("black");
  }
  localStorage["background"] = "normal";
}

function black() {
  document.getElementsByTagName("body")[0].classList.add("black");
  var x = document.getElementsByClassName("change");
  for(var i = 0; i < x.length; i++) {
    x[i].classList.add("black");
  }
  x = document.getElementsByTagName("a");
  for(var i = 0; i < x.length; i++) {
    x[i].classList.add("black");
  }
  localStorage["background"] = "black";
}

function increase() {
  document.getElementsByTagName("body")[0].style.fontSize = "larger";
  var x = document.getElementsByTagName("body")[0].style.fontSize;
  console.log("size: " + x);
  localStorage["size"] = "big";
}

function decrease() {
  document.getElementsByTagName("body")[0].style.fontSize = "smaller";
  localStorage["size"] = "small";
}
