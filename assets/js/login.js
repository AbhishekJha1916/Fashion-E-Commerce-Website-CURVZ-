let results = document.getElementById("search-results");
let input_area = document.querySelector(".search-bar-input");

function clicksearch(){
  document.getElementById('search-div').style.display = "none";
  document.getElementById('search-bar-div').style.display = "flex";
  results.style.display = "none";
}
function closesearch(){
  document.getElementById('search-div').style.display = "flex";
  document.getElementById('search-bar-div').style.display = "none";
  results.style.display = "none";
}

input_area.addEventListener('focus', () => {
  results.style.display = "block";
});

input_area.addEventListener('focusout', () => {
  results.style.display = "none";
});   