const container = document.getElementById("content");

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

function createElement(type, addClass, innerHTML) {
  const domElement = document.createElement(type);
  domElement.classList.add(addClass);
  domElement.innerHTML = innerHTML;
  container.appendChild(domElement);
}

function buildNavBar() {
  const nav = document.querySelector(".nav");
  nav.appendChild(buttonBuilder("Home", "active"));
  nav.appendChild(buttonBuilder("Menu", "hidden"));
  nav.appendChild(buttonBuilder("Contact-Us", "hidden"));
}

function buttonBuilder(innerHtml, addClass) {
  const btn = document.createElement("button");
  btn.innerHTML = innerHtml;
  btn.id = innerHtml;
  btn.classList.add(addClass);
  return btn;
}

export default createSite;
