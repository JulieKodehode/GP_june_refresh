// [] square = array
// {} curly = object
const myArray = [
   {movie: "Finding Nemo"},
   {movie: "The Lion King"},
   {movie: "The Little Mermaid"}
];

// View the array
console.log(myArray);

// View an object
console.log(myArray[0]);

// View a specific data
console.log(myArray[0].movie);

// An async function to get the data
async function getData() {
   // Return the array myArray
   return myArray;
}

// An async function to display a movie
async function moviesDisplay() {
   // Await the data from getData() and assign it to movieData
   const movieData = await getData();
   // Log the movie title of the second object in the array
   console.log(movieData[1].movie);
}

// Call the moviesDisplay function to execute it
moviesDisplay();

//
// DIVIDER
//

// An async function to fetch and display cat facts
async function catFactGenerator() {
   // Await the fetch response from the cat facts API
   const response = await fetch("https://catfact.ninja/facts");

   // View the response object
   console.log(response);

   // Await and parse the JSON from the response
   const catFactData = await response.json();

   // View the parsed JSON data
   console.log(catFactData);

   // View a specific data
   console.log(catFactData.data[5].fact);
}

// Call the catFactGenerator function to execute it
catFactGenerator();
