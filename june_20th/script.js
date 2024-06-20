import { returnName } from "./js/returnName.js";

returnName();

import { themeToggle } from "./js/themeToggle.js";

const themeToggleButton = document.querySelector("#themeToggleButton");
console.log(themeToggleButton);

themeToggleButton.addEventListener("click", themeToggle);