function method_1() {
   console.log("This is method one! An onclick event.");

   // More code
};

//
/*
Method 2 uses a regular function that will be called upon when the event listener receives a click
*/

function method_2() {
   console.log("This is method two! An event lister with a separate function.");

   // More code
};

const method_2_button = document.querySelector("#method_2");

method_2_button.addEventListener("click", method_2);

//

const method_3_button = document.querySelector("#method_3");

method_3_button.addEventListener("click", () => {
   console.log("This is method three! An event lister with a arrow function inside.");

   // More code
});