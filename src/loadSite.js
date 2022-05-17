//this is because of webpack erasing my index.html when I added a plugin...
//not sure how to have anything in my index.html with webpack plugin
const makeContainer = document.createElement("div");
makeContainer.id = "content";
const html = document.querySelector("html");
html.appendChild(makeContainer);

//this is where it began before webpack plugin
const container = document.getElementById("content");

//this creates the site layout
function createSite() {
  createElement("h1", "header", "Marshall's Cafe");
  createElement("div", "main", "");
  createElement(
    "div",
    "footer",
    "&copy The Daver gets to move to CostaRica project 2022"
  );
  createElement("div", "blank", "");
  createElement("div", "blank2", "");
  createElement("div", "nav", "");
  buildNavBar();
}

//I could probably save this function somewhere, as I use it in all my js files. But I didnt
function createElement(type, addClass, innerHTML) {
  const domElement = document.createElement(type);
  domElement.classList.add(addClass);
  domElement.innerHTML = innerHTML;
  container.appendChild(domElement);
}

//Builds Nav bar
function buildNavBar() {
  const nav = document.querySelector(".nav");
  nav.appendChild(buttonBuilder("Home", "active"));
  nav.appendChild(buttonBuilder("Menu", "hidden"));
  nav.appendChild(buttonBuilder("Contact-Us", "hidden"));
}

//a function to build buttons
function buttonBuilder(innerHtml, addClass) {
  const btn = document.createElement("button");
  btn.innerHTML = innerHtml;
  btn.id = innerHtml;
  btn.classList.add(addClass);
  return btn;
}

export default createSite;
