window.onload=function() {
  document.getElementById("normal").addEventListener("click", normal);
  document.getElementById("black").addEventListener("click", black);
}

function normal() {
  document.getElementById("nav").classList.remove("black");
}

function black() {
  document.getElementById("nav").classList.add("black");
}
