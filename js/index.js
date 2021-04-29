//dynamically load the year for copyright 
function getYear() {
  let d = new Date();
  let year = d.getFullYear();
  document.getElementById("copyright").innerHTML = year;
}