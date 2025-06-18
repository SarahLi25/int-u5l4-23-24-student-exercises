let body = document.querySelector("body");
let container = document.querySelector(".container");

// 1. Create an h2 element.
let h2 = document.createElement("h2");

// 2. Set the innerHTML of h2 to your name.
h2.innerHTML = "Sarah Li"; 

// 3. Style at least two different properties for the heading.
h2.style.color = "blue";
h2.style.fontSize = "24px";

// 4. Select the container div and append the h2 element.
container.appendChild(h2);

// 5. Create a paragraph element.
let para = document.createElement("p");

// 6. Set the innerHTML of para to a fact about yourself.
para.innerHTML = "I love learning about new technologies!"; 

// 7. Style at least two different properties for the paragraph.
para.style.color = "green";
para.style.fontStyle = "italic";

// 8. Select the container div and append the paragraph element.
container.appendChild(para);