class food {
  constructor(name, content, image) {
    this.name = name;
    this.content = content;
    this.image = image;
  }
  createDom = () => {
    let mainDiv = createElement("div");
    mainDiv.classList.add("food");
    let titleDiv = createElement("div", "", this.name);
    mainDiv.appendChild(titleDiv);
    let imageDiv = createElement("div");
    imageDiv.style.background = url(this.image);
    mainDiv.appendChild(imageDiv);
    let descriptionDiv = createElement("div", "", this.content);
    mainDiv.appendChild(descriptionDiv);
    return mainDiv;
  };
}

function renderMenu() {
  const main = document.querySelector(".main");
  main.classList.add("main-menu");

  const buttonDiv = createElement("div", "buttonDiv", "");
  buttonDiv.appendChild(buttonBuilder("Food"));
  buttonDiv.appendChild(buttonBuilder("Drinks"));
  main.appendChild(buttonDiv);

  const menuDisplay = createElement("div", "menu-display", "");
  main.appendChild(menuDisplay);
}

function buttonBuilder(innerHtml) {
  const btn = document.createElement("button");
  btn.innerHTML = innerHtml;
  btn.id = innerHtml;
  if (innerHtml === "Food") {
    btn.addEventListener("click", foodListener);
  } else if (innerHtml === "Drinks") {
    btn.addEventListener("click", drinksListener);
  }
  return btn;
}

function createElement(type, addClass, innerHTML) {
  const domElement = document.createElement(type);
  domElement.classList.add(addClass);
  domElement.innerHTML = innerHTML;
  return domElement;
}

function foodListener() {
  const menuDisplayArea = document.querySelector(".menu-display");
  let croissant = new food(
    "croissant",
    "This is probably the best croissant you can buy for 18 cents.",
    "../src/images/croissant.jpg"
  );
  alert(croissant.createDom());
}

function drinksListener() {
  alert("display drinks");
}

export default renderMenu;
