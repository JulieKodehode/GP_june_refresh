function themeToggle() {
   const body = document.querySelector("#themeToggle");
   console.log(body);

   body.classList.toggle("dark");
}

export {themeToggle};