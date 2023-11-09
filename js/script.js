//1. Create a simple router to run specific JS, specific functions on specific pages
// console.log(window.location.pathname); //to check specific routes for current page
const global = {
  currentPage: window.location.pathname,
};

// 5. Function to display Popular Movies
async function displayPopularMovies() {
  // add curly bracket {} around the results is for destructuring.
  // It extracts the results property from object return and assigns them to variables with the same name.
  const { results } = await fetchAPIData("movie/popular"); // call the fetch API Data and passing the endpoint
  console.log(results); // return array of objects

  // 5A. Create dynamic HTML elements here, need to loop through the results
  results.forEach((movie) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
      <a href="movie-details.html?id=${movie.id}">
        ${
          movie.poster_path
            ? `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="${movie.title}" />`
            : `<img src="images/no-image.jpg" class="card-img-top" alt="Movie Title" />`
        }
      </a>
      <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
        <p class="card-text">
          <small class="text-muted">Release: ${movie.release_date}</small>
        </p>
      </div>
    `;

    //5B - put the created div into the DOM
    document.querySelector("#popular-movies").appendChild(div);
  });
}

//4. Function to Fetch data from TMDB API
async function fetchAPIData(endpoint) {
  const API_KEY = "428bc575ccb6a7d4d8c221c9fa4718df"; //include for learning purpose ONLY, normally would have it in the dot env file on the backend server side for protection
  const API_URL = "https://api.themoviedb.org/3/";
  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
  );
  const data = await response.json();

  return data;
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
      // console.log("Home"); //then log 'Home
      displayPopularMovies();
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
