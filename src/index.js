import "./style.css";
import { appendHome } from "./home";
import { appendMenu } from "./menu";
import { appendContact } from "./contact";

const contentContainer = document.querySelector("#content");

// Element Creation
const navbar = document.createElement("navbar");
const ul = document.createElement("ul");

const footer = document.createElement("footer");
const footerParagraph = document.createElement("p");

function changeTab(liTextContent) {
  if (liTextContent == "HOME") {
    contentContainer.innerHTML = "";
    contentContainer.appendChild(navbar);
    appendHome(contentContainer, changeTab);
    contentContainer.appendChild(footer);
  } else if (liTextContent == "MENU") {
    contentContainer.innerHTML = "";
    contentContainer.appendChild(navbar);
    appendMenu(contentContainer);
    contentContainer.appendChild(footer);
  } else if (liTextContent == "CONTACT") {
    contentContainer.innerHTML = "";
    contentContainer.appendChild(navbar);
    appendContact(contentContainer);
    contentContainer.appendChild(footer);
  }
}

function createLi(content) {
  const li = document.createElement("li");
  li.textContent = `${content}`;
  li.addEventListener("click", () => changeTab(content));
  return li;
}

navbar.classList.add("navbar");
navbar.appendChild(ul);
ul.appendChild(createLi("HOME"));
ul.appendChild(createLi("MENU"));
ul.appendChild(createLi("CONTACT"));

footer.classList.add("footer");
footer.appendChild(footerParagraph);
footerParagraph.textContent = "Copyright 2023 - Odin Caffe & Eatery";

contentContainer.appendChild(navbar);

// appendHome(contentContainer);
// appendMenu(contentContainer);
appendHome(contentContainer, changeTab);
// document.body.appendChild(appendHome);

contentContainer.appendChild(footer);
