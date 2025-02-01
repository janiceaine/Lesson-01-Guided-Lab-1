# DOM Manipulation Guided Lab 1

Welcome to this guided lab on DOM manipulation! In this lab, we will learn how to access and manipulate HTML elements using JavaScript. By the end of this lab, you’ll understand how to:

1. Access elements using `document.querySelector`.
2. Modify text content with `.textContent` and `.innerHTML`.
3. Change the `src` attribute of elements.
4. Use `.classList` to add, remove, and toggle classes.

---

## Table of Contents

- [Setup Instructions](#setup-instructions)
- [Lab Directions](#lab-directions)
  - [1. Access Elements with `document.querySelector`](#1-access-elements-with-documentqueryselector)
  - [2. Modify Text Content](#2-modify-text-content)
  - [3. Change Attributes](#3-change-attributes)
  - [4. Work with Classes](#4-work-with-classes)
- [Bonus Challenge](#bonus-challenge)
- [Wrap-Up](#wrap-up)

---

## Setup Instructions

1. Inspect the `src` folder, this folder will be where you will be working at for this lab.

## Lab Directions

1. Access Elements with `document.querySelector`
    - Open `index.mjs`
    - Use `document.querySelector` to select the following elements:
        -  The `<h1>` with the `id` of `header`
        - The `<p>` with the class of `description`
        - The `<img>` with the `id` of `image`
    - Then log these elements to the console to confirm they are selected correctly

Example:
```JavaScript
const header = document.querySelector("#header");
const description = document.querySelector(".description");
const image = document.querySelector("#image");
```

2. Modify Text Content
     - Use `.textContent` to change the text of the `<h1>` element to `"DOM Manipulation is Fun!"`
     - Use `.innerHTML` to add a `<strong>` tag to the description paragraph. Change the text to: `"This is a <strong>dynamic</strong> paragraph.`

Example:
```JavaScript
header.textContent = "DOM Manipulation is Fun!";
description.innerHTML = "This is a <strong>dynamic</strong> paragraph.";
```

3. Change Attributes
    - Update the `src` of the `<img>` element. Replace the placeholder image with this URL: `https://picsum.photos/id/11/200/300`

Example:
```JavaScript
image.src = "https://picsum.photos/id/11/200/300";
```

4. Work with Classes
    - Use `.classList` to:
        1. Add the `highlight` class to the `<h1>` element.
        2. Remove the `highlight` class from the `<h1>` element.
        3. Toggle the `highlight` class on the `<h1>` element when the "Toggle Highlight" button is clicked.
Example: 
```JavaScript
// Add the class
header.classList.add("highlight");

// Remove the class
header.classList.remove("highlight");

// Toggle the class on button click
const toggleButton = document.querySelector("#toggle-button");
toggleButton.addEventListener("click", () => {
  header.classList.toggle("highlight");
});
```

## Bonus Challenge

1. Add a new button that, when clicked, changes the text of the paragraph to "You clicked the button!".
2. Make the image rotate by 90 degrees each time you click the image.

## Wrap-Up

Congratulations! 🎉 You’ve completed the guided lab on DOM manipulation. You learned how to:

    - Access and manipulate elements using `document.querySelector`.
    - Modify content and attributes dynamically.
    - Add interactivity using classes and event listeners.

Feel free to experiment further to reinforce your learning. Happy coding!