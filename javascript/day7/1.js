//Give an example of using a callback function to handle an asynchronous operation in JavaScript (Use any open api to make a call)


async function logMovies() {
    const response = await fetch("https://movie-database-alternative.p.rapidapi.com/");
    const movies = await response.json();
    console.log(movies);
  }
  