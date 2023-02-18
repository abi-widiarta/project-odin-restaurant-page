// Element Creation
const main = document.createElement("main");
const mainTitle = document.createElement("h1");
const mainParagraph = document.createElement("p");
const mainButton = document.createElement("button");

// Set Element Attribute and InnerHTML
main.classList.add("main-home");
mainTitle.innerHTML = "Odin Caffee <br />& Eatery";
mainTitle.classList.add("hero-title");
mainParagraph.textContent = "Great Foods Great Lifes";
mainParagraph.classList.add("hero-subtitle");
mainButton.textContent = "MENU";
mainButton.classList.add("hero-btn");

// Append Element
main.appendChild(mainTitle);
main.appendChild(mainParagraph);
main.appendChild(mainButton);

// Append to contentContainer
export function appendHome(contentContainer, changeTab) {
  contentContainer.appendChild(main);

  mainButton.addEventListener("click", () => {
    contentContainer.innerHTML = "";
    changeTab("MENU");
  });
}
