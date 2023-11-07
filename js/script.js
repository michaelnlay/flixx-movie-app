//1. Create a simple router to run specific JS, specific functions on specific pages
// console.log(window.location.pathname); //to check specific routes for current page
const global = {
  currentPage: window.location.pathname,
};

//4. Fetch data from TMDB API
async function fetchAPIData(endpoint) {
  const API_KEY = "428bc575ccb6a7d4d8c221c9fa4718df"; //include for learning purpose ONLY, normally would have it in the dot env file on the backend server side for protection
  const API_URL = "https://api.themoviedb.org/3/";
  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.json();

  console.log(data);
}

//3. Function to highlight active link on the navbar when selected
function highlightActiveLink() {
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    if (link.getAttribute("href") === global.currentPage) {
      link.classList.add("active");
    }
  });
}

console.log(global.currentPage);

//2. Init App
//These are simple rounters
//Whatever functions we want to run for each page, put inside of that case
function init() {
  //2a. to check current page, using switch() instead of using multiple if statements
  switch (
    global.currentPage //check
  ) {
    case "/": //if /
    case "/index.html":
      console.log("Home"); //then log 'Home
      break;
    case "/shows.html": //if /shows.html
      console.log("Shows"); //then log 'Home
      break;
    case "/movie-details.html":
      console.log("Movie Details");
      break;
    case "/tv-details.html":
      console.log("TV Details");
      break;
    case "/search.html":
      console.log("Search");
      break;
  }

  highlightActiveLink();
}

document.addEventListener("DOMContentLoaded", init);
