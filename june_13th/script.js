// In creation () = Parameter
 function greeting(greet, name) {
   console.log(greet + ", " + name);

   const displayGreeting = document.querySelector("#displayGreeting");

   displayGreeting.textContent = `${greet}, ${name}`;
};

// In calling () = Argument
greeting("Good morning", "Julie!");
greeting("Good night", "Julie!");


function character(firstName, lastName) {
   this.firstName = firstName;
   this.lastName = lastName;
};

const juliesCharacter = new character("Julie", "Hauge");
const juliesSecondCharacter = new character("Julius", "Hugh");

function displayCharacter(character) {
   const displayDiv = document.querySelector("#displayDiv");

   displayDiv.textContent = `${character.firstName} ${character.lastName}`
}

displayCharacter(juliesCharacter);