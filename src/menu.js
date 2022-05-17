import croissantImg from "../src/images/croissant.jpg";
import bananaImg from "../src/images/banana.jpg";
import danishImg from "../src/images/danish.jpg";
import meatPieImg from "../src/images/meatPie.jpg";
import chickenWingsImg from "../src/images/chickenWings.jpg";
import latteImg from "../src/images/latte.jpg";
import cappucinoImg from "../src/images/cappucino.jpg";
import americanoImg from "../src/images/americano.jpg";
import waterImg from "../src/images/water.jpg";

//class constructor for a new food item
class food {
  constructor(name, content, image, price) {
    this.name = name;
    this.content = content;
    this.image = image;
    this.price = price;
  }

  createDom = () => {
    let mainDiv = createElement("div", "food", "");
    let titleDiv = createElement("div", "food-title", this.name);
    mainDiv.appendChild(titleDiv);
    let imageDiv = createElement("div", "food-image", "");
    const image = new Image();
    image.src = this.image;
    imageDiv.appendChild(image);
    mainDiv.appendChild(imageDiv);
    let priceDiv = createElement("div", "food-price", this.price);
    mainDiv.appendChild(priceDiv);
    let descriptionDiv = createElement("div", "food-description", this.content);
    mainDiv.appendChild(descriptionDiv);
    return mainDiv;
  };
}

//main rendering of original menu screen
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

//function to make a button
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
//function to make an element
function createElement(type, addClass, innerHTML) {
  const domElement = document.createElement(type);
  domElement.classList.add(addClass);
  domElement.innerHTML = innerHTML;
  return domElement;
}

//event listener for clicking food button
function foodListener() {
  removeMenu();
  displayAllFood();
}

//event listener for clicking drinks button
function drinksListener() {
  removeMenu();
  displayAllDrinks();
}

//all the different items on the menu
const croissant = new food(
  "Croissant",
  "This is probably the best croissant you can buy for 18 cents.",
  `${croissantImg}`,
  "$ 0.18"
);

const banana = new food(
  "Banana",
  "Yeah, we are selling just a plain banana. If you dont want it then dont buy it!",
  `${bananaImg}`,
  "$ 19.99"
);

const danish = new food(
  "Danish",
  "This is a tasty snack. Puffed pastry with some red goop inside. 10/10 would reccomend.",
  `${danishImg}`,
  "$ 1.99"
);
const meatPie = new food(
  "Meat Pie",
  "It's kind of like a meat-loaf, and also kind of like a pot-pie. It's ok at best.",
  `${meatPieImg}`,
  "free"
);

const chickenWings = new food(
  "Chicken Wings",
  "Ever been to a cafe with chicken wings? Well now you have! We just got an air fryer and are willing to fry anything!",
  `${chickenWingsImg}`,
  "$ 10.00 per lb"
);

//array of all the foods
const allFoods = [croissant, banana, danish, meatPie, chickenWings];

//display the foods function
function displayAllFood() {
  const menuDisplayArea = document.querySelector(".menu-display");
  allFoods.forEach((food) => {
    menuDisplayArea.appendChild(food.createDom());
  });
}

//clears the menu when switching from food/drinks vice versa
function removeMenu() {
  const menuDisplayArea = document.querySelector(".menu-display");
  while (menuDisplayArea.firstChild) {
    menuDisplayArea.removeChild(menuDisplayArea.firstElementChild);
  }
}

const latte = new food(
  "Latte",
  "Espresso with foamy milk.",
  `${latteImg}`,
  "$ 4.99"
);
const cappucino = new food(
  "Cappucino",
  "Espresso with foamy milk. Somehow slightly different than latte",
  `${cappucinoImg}`,
  "$ 4.99"
);
const americano = new food(
  "Americano",
  "Espresso with no foamy milk just water. But it's hot. Bring your own sugar and cream please.",
  `${americanoImg}`,
  "$ 4.99"
);
const water = new food(
  "Water",
  "Espresso with no foamy milk just water also no espresso. Making sure this updates",
  `${waterImg}`,
  "$ 4.99"
);
const allDrinks = [latte, cappucino, americano, water];

//display the foods function
function displayAllDrinks() {
  const menuDisplayArea = document.querySelector(".menu-display");
  allDrinks.forEach((drink) => {
    menuDisplayArea.appendChild(drink.createDom());
  });
}

export default renderMenu;
