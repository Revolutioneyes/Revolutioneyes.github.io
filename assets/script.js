window.onload=function() {
  document.getElementById("normal").addEventListener("click", normal);
  document.getElementById("black").addEventListener("click", black);
  document.getElementById("increase").addEventListener("click", increase);
  document.getElementById("decrease").addEventListener("click", decrease);
}

function normal() {
  document.getElementsByTagName("body")[0].classList.remove("black");
  document.getElementById("change").classList.remove("black");
  document.getElementById("change1").classList.remove("black");
  document.getElementById("change2").classList.remove("black");
  var x = document.getElementsByTagName("a");
  for(var i = 0; i < x.length; i++) {
    x[i].classList.remove("black");
  }
}

function black() {
  document.getElementsByTagName("body")[0].classList.add("black");
  document.getElementById("change").classList.add("black");
  document.getElementById("change1").classList.add("black");
  document.getElementById("change2").classList.add("black");
  var x = document.getElementsByTagName("a");
  for(var i = 0; i < x.length; i++) {
    x[i].classList.add("black");
  }
}

function increase() {
  document.getElementsByTagName("body")[0].style.fontSize = "larger";
  /*var x = document.getElementById("body").style.fontSize;
  console.log(x);*/
}

function decrease() {
  document.getElementsByTagName("body")[0].style.fontSize = "smaller";
}
