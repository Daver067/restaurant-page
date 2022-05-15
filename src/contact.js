function renderContact() {
  const main = document.querySelector(".main");
  main.classList.add("main-contact");
  let marshall = createElement("div", "marshall", "");
  marshall.style.backgroundImage = "url('../src/images/marshall.jpg')";
  main.appendChild(marshall);
  let marshall2 = createElement("div", "marshall2", "");
  marshall2.style.backgroundImage = "url('../src/images/marshall2.jpg')";
  main.appendChild(marshall2);
  main.appendChild(
    createElement(
      "div",
      "about-us",
      "We are a family run business. Marshall doesn't really do anything to help us in any way, but he is a very sweet boy."
    )
  );
  main.appendChild(
    createElement(
      "div",
      "about-us",
      "Come check us out! The address is 123 Fake Street, Vancouver, BC Canada"
    )
  );
}

function createElement(type, addClass, innerHTML) {
  const domElement = document.createElement(type);
  domElement.classList.add(addClass);
  domElement.innerHTML = innerHTML;
  return domElement;
}

function createImg() {
  const image = new Image();
  image.src = "../src/images/marshall.jpg";
  image.classList.add("marshall");
  return image;
}

export default renderContact;
