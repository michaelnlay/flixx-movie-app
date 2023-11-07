//1. Create a simple router to run specific JS, specific functions on specific pages
// console.log(window.location.pathname); //to check specific routes for current page
const global = {
  currentPage: window.location.pathname,
};

//3. Function to highlight active link on the nav when select
function highlightActiveLink() {}

console.log(global.currentPage);

//2. Init App
//These are our simple rounters
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
}

document.addEventListener("DOMContentLoaded", init);
