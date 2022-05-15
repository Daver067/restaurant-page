import "./style.css";
import createSite from "./loadSite";
import renderHome from "./home";
import renderContact from "./contact";
import renderMenu from "./menu";

createSite();
renderHome();
addAllListeners();

const main = document.querySelector(".main");

//function adding listeners to buttons
function addAllListeners() {
  const home = document.getElementById("Home");
  home.addEventListener("click", eventListenerHome);

  const menu = document.getElementById("Menu");
  menu.addEventListener("click", eventListenerMenu);

  const contactUs = document.getElementById("Contact-Us");
  contactUs.addEventListener("click", eventListenerContactUs);
}
//event listener for home button
function eventListenerHome() {
  removeChildren();
  if (main.classList.contains("main-contact")) {
    main.classList.remove("main-contact");
  } else if (main.classList.contains("main-menu")) {
    main.classList.remove("main-menu");
  }
  renderHome();
}

//rvrnt listener for menuy button
function eventListenerMenu() {
  removeChildren();
  if (main.classList.contains("main-home")) {
    main.classList.remove("main-home");
  } else if (main.classList.contains("main-contact")) {
    main.classList.remove("main-contact");
  }
  renderMenu();
}

//event listener for contact us
function eventListenerContactUs() {
  removeChildren();
  if (main.classList.contains("main-home")) {
    main.classList.remove("main-home");
  } else if (main.classList.contains("main-menu")) {
    main.classList.remove("main-menu");
  }
  renderContact();
}

//function to remove all existing dom elements from the main display prior to updating it to new data
function removeChildren() {
  while (main.firstChild) {
    main.removeChild(main.firstElementChild);
  }
}
