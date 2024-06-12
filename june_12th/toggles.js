/*
GOAL:
A function that changes the color of something from blue to green, activated by an event listener

HOW:
Need something to modify - div in html

Need a button to click - button in html

Need two classes with different styling - two selectors in css

Need to get info from HTML and CSS into JS - get IDs from html and save them in a variable

Need a function that will run when button is clicked - regular function that changes active class and set up an event listener
*/

/* Practice 1 */
function colorChangeToggle() {
   const colorChangeDiv = document.querySelector("#colorChange");

   colorChangeDiv.classList.toggle("green");
};

const colorChangeButton = document.querySelector("#colorChangeButton");

colorChangeButton.addEventListener("click", colorChangeToggle);

/*
GOAL: A function that shows or hides an element, activated by an event listener.
*/

function showHideToggle() {
   const showHideDiv = document.querySelector("#showHide");

   showHideDiv.classList.toggle("show");
}

const showHideButton = document.querySelector("#showHideButton");

showHideButton.addEventListener("click", showHideToggle);