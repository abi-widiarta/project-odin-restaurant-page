// Element Creation
const navbar = document.createElement("navbar");
const ul = document.createElement("ul");

const main = document.createElement("main");
const mainTitle = document.createElement("h1");
const mainParagraph = document.createElement("p");
const mainButton = document.createElement("button");

const footer = document.createElement("footer");
const footerParagraph = document.createElement("p");

// InnerHTML Creation
navbar.classList.add("navbar");

main.classList.add("main");
mainTitle.innerHTML = "Odin Caffee <br />& Eatery";
mainTitle.classList.add("hero-title");
mainParagraph.textContent = "Great Foods Great Lifes";
mainParagraph.classList.add("hero-subtitle");
mainButton.textContent = "MENU";
mainButton.classList.add("hero-btn");

footer.classList.add("footer");
footer.appendChild(footerParagraph);
footerParagraph.textContent = "Copyright 2023 - Odin Caffe & Eatery";

// Agar bisa append multiple li, harus dibuat fungsi
function createLi(content) {
  const li = document.createElement("li");
  li.textContent = `${content}`;
  return li;
}

export function appendHome(contentContainer) {
  contentContainer.appendChild(navbar);
  navbar.appendChild(ul);
  ul.appendChild(createLi("HOME"));
  ul.appendChild(createLi("MENU"));
  ul.appendChild(createLi("CONTACT"));

  contentContainer.appendChild(main);
  main.appendChild(mainTitle);
  main.appendChild(mainParagraph);
  main.appendChild(mainButton);

  contentContainer.appendChild(footer);
}
