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

function changeTab(li) {
  console.log(li.textContent);
  if (li.textContent == "HOME") {
    contentContainer.innerHTML = "";
    contentContainer.appendChild(navbar);
    appendHome(contentContainer);
    contentContainer.appendChild(footer);
  } else if (li.textContent == "MENU") {
    contentContainer.innerHTML = "";
    contentContainer.appendChild(navbar);
    appendMenu(contentContainer);
    contentContainer.appendChild(footer);
  } else if (li.textContent == "CONTACT") {
    contentContainer.innerHTML = "";
    contentContainer.appendChild(navbar);
    appendContact(contentContainer);
    contentContainer.appendChild(footer);
  }
}

function createLi(content) {
  const li = document.createElement("li");
  li.textContent = `${content}`;
  li.addEventListener("click", () => changeTab(li));
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
appendHome(contentContainer);
// document.body.appendChild(appendHome);

contentContainer.appendChild(footer);
