// DOM Manipulation Lab 1 Starter Code

// 1. Access Elements with `document.querySelector`
// Task: Select the following elements and log them to the console:
// 1. The <h1> with the `id` of `header`.
// 2. The <p> with the class of `description`.
// 3. The <img> with the `id` of `image`.

const header = document.querySelector("#header");
const description = document.querySelector(".description");
const opinion = document.querySelector(".opinion");
const image = document.querySelector("#image");
console.log(header);
console.log(description);
console.log(image);

// Example:
// const header = document.querySelector("#header");
// console.log(header);

// 2. Modify Text Content
// Task:
// 1. Use `.textContent` to change the text of the <h1> element to "DOM Manipulation is Fun!".
// 2. Use `.innerHTML` to make the <p> element display: "This is a <strong>dynamic</strong> paragraph."

header.textContent = "DOM Manipulation is fun!";
description.innerHTML = "This is a <strong>dynamic</strong> paragraph.";
opinion.innerHTML = "Tell me, Honestly! Did you <strong>ENJOY</strong> this?";
// Example:
// header.textContent = "DOM Manipulation is Fun!";

// 3. Change Attributes
// Task: Update the `src` attribute of the <img> element to this URL:
// https://picsum.photos/id/11/200/300

// Example:
// image.src = "https://picsum.photos/id/11/200/300";

image.src = "https://picsum.photos/id/11/200/300";

// 4. Work with Classes
// Task:
// 1. Use `.classList.add` to add the `highlight` class to the <h1> element.
// 2. Use `.classList.remove` to remove the `highlight` class from the <h1> element.
// 3. Use `.classList.toggle` to toggle the `highlight` class when a button with `id="toggle-button"` is clicked.

header.classList.add("highlight");
header.classList.remove("highlight");

const toggleButton = document.querySelector("#toggle-button");
toggleButton.addEventListener("click", () => {
  header.classList.toggle("highlight");
});

// Example:
// toggleButton.addEventListener("click", () => {
//   header.classList.toggle("highlight");
// });

// BONUS CHALLENGE:
// 1. Add functionality to a new button that changes the paragraph text to "You clicked the button!" when clicked.
// 2. Add functionality to make the image rotate 90 degrees each time it is clicked.

// Hint: You can use `transform: rotate()` in CSS and modify the style property in JavaScript.
