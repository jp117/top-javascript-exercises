const red = document.createElement("p");
const body = document.body;
const h3 = document.createElement("h3");
const div = document.createElement("div");
const h1 = document.createElement("h1");
const metoo = document.createElement("p");

red.textContent = "Hey I'm Red!";
red.style.color = "red";

h3.textContent = "I'm a blue h3!";
h3.style.color = "blue";

div.style.backgroundColor = "pink";
div.style.borderColor = "black";
div.style.borderStyle= "solid";

h1.textContent = "I'm in a div";

metoo.textContent = "ME TOO!";

body.appendChild(red);
body.appendChild(h3);

div.appendChild(h1);
div.appendChild(metoo);

body.appendChild(div);