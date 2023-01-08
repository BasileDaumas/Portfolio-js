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



"use strict";

let carousel_slides = document.getElementsByClassName("carousel-slide");
let number_of_slides = carousel_slides.length;

let index = 0;

let _navigation_dots = document.getElementById("navigation-dots");
let dot = document.createElement("i");
dot.classList.add("fa-solid", "fa-circle", "dot");
let unique_dot;

for (let x=1; x<number_of_slides; x++) {
    unique_dot = dot.cloneNode();
    unique_dot.addEventListener("click", function() {changeSlide('jump-to', x)});
    _navigation_dots.appendChild(unique_dot);
}

let navigation_dots = _navigation_dots.children;

for (let i=1; i<number_of_slides; i++) {
    carousel_slides[i].style.display = "none";
}

function changeSlide(action, value) {

    carousel_slides[index].style.display = "none";
    navigation_dots[index].removeAttribute("id");
    
    switch (action) {
        case "move-right": {

            if (index === number_of_slides-1) {
                index = 0;
            }
            else {
                index += 1;
            }
            break;
        }
        
        case "move-left": {
            if (index === 0) {
                index = number_of_slides-1;
            }
            else {
                index -= 1;
            }
            break;
        }
        
        case "jump-to": {
            index = value;
            break;
        }
    }
            
    carousel_slides[index].style.display = "flex";
    navigation_dots[index].id = "active-dot";
}