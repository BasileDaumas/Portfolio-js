// Selecteurs
const main = document.querySelector(".main-container");
const h1 = document.querySelector("h1");
const button = document.querySelector("button");
console.log("main")
// Listener
button.addEventListener("click", function() {
  if (main.classList.contains("light")) {
    main.classList.add("dark");
    main.classList.remove("light");
    button.innerText = "Light Mode";
  } else {
    main.classList.add("light");
    main.classList.remove("dark");
    button.innerText = "Dark Mode";
  }
});