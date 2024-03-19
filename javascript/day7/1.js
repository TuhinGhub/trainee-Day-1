//Give an example of using a callback function to handle an asynchronous operation in JavaScript (Use any open api to make a call)


async function logMovies() {
  try{
    const response = await fetch("https://movie-database-alternative.p.rapidapi.com/");
     if(!response.ok){
      throw new Error(`hTTP error`);
     }

    const movies = await response.json();
    console.log(movies);
  }catch(error){
    console.error(error);
  }

}
