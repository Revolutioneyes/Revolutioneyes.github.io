window.onload=function() {
  document.getElementById("normal").addEventListener("click", normal);
  document.getElementById("black").addEventListener("click", black);
}

function normal() {
  document.getElementById("page-wrapper").classList.remove("black");
  
}

function black() {
  document.getElementById("page-wrapper").classList.add("black");
}
