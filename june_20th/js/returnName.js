function returnName() {
   const userName = "Julie!";

   const displayName = document.querySelector("#displayName");
   console.log(displayName);

   const textDisplay = document.createElement("h1");

   textDisplay.textContent = userName;

   displayName.appendChild(textDisplay);
}

export {returnName};