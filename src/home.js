function renderHome() {
  const main = document.querySelector(".main");
  main.classList.add("main-home");
  const div = createElement("div", "home", "");
  div.appendChild(
    createElement(
      "p",
      "home-content",
      "This is the website for Marshall's Cafe! We have any kind of coffee that our automatic machine will make, along with costco pastries!"
    )
  );

  div.appendChild(
    createElement(
      "p",
      "home-content",
      "I hope you don't mind golden hairs in your food! Check our menu!"
    )
  );
  main.appendChild(div);
}

function createElement(type, addClass, innerHTML) {
  const domElement = document.createElement(type);
  domElement.classList.add(addClass);
  domElement.innerHTML = innerHTML;
  return domElement;
}

export default renderHome;
