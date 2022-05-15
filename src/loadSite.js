const container = document.getElementById("content");
//creates the header
function createHeader() {
  const H1 = document.createElement("h1");
  H1.innerHTML = "Marshall's Cafe";
  H1.classList.add("header");
  container.appendChild(H1);
}

//creates the about us paragraph
function createParagraph() {
  const paragraph = document.createElement("p");
  paragraph.innerHTML =
    "This is the website for Marshall's Cafe! We have any kind of coffee that our automatic machine will make, along with costco pastries!";
  paragraph.classList.add("main");
  container.appendChild(paragraph);
}

function createFooter() {
  const footer = document.createElement("div");
  footer.classList.add("footer");
  footer.innerHTML = "&copy The Daver gets to move to CostaRica project 2022";
  container.appendChild(footer);
}

function createSite() {
  createHeader();
  createParagraph();
  createFooter();
}

export default createSite;
