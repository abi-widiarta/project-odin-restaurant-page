// Element Creation
const navbar = document.createElement("navbar");
const ul = document.createElement("ul");

const main = document.createElement("main");
const mainTitle = document.createElement("h1");
const menus = document.createElement("div");

navbar.classList.add("navbar");

main.classList.add("main");
mainTitle.className = "menu-title";
mainTitle.textContent = "MENU";

menus.className = "menus";

function createMenuCard(title, desc, price) {
  const menuCard = document.createElement("div");
  const menuCardTitle = document.createElement("h2");
  const menuCardDesc = document.createElement("p");
  const menuCardPrice = document.createElement("p");

  menuCard.className = "menu-card";
  menuCardTitle.className = "menu-card__title";
  menuCardDesc.className = "menu-card__desc";
  menuCardPrice.className = "menu-card__price";

  menuCardTitle.textContent = title;
  menuCardDesc.textContent = desc;
  menuCardPrice.textContent = price;

  menuCard.append(menuCardTitle, menuCardDesc, menuCardPrice);
  return menuCard;
}

const footer = document.createElement("footer");
const footerParagraph = document.createElement("p");

footer.classList.add("footer");
footer.appendChild(footerParagraph);
footerParagraph.textContent = "Copyright 2023 - Odin Caffe & Eatery";

menus.appendChild(createMenuCard("Odin Salad", "Combination of fresh vegetables and delicious fruits", "12$"));
menus.appendChild(createMenuCard("Odin Pizza", "Pizza with delicious topping and rich flavors", "16$"));
menus.appendChild(createMenuCard("Odin Burger", "Burger with extra thick patty and delicious bun", "10$"));
menus.appendChild(createMenuCard("Odin Coffee", "Fresh homemade coffee with high quality beans", "8$"));
main.appendChild(mainTitle);
main.appendChild(menus);

export function appendMenu(contentContainer) {
  contentContainer.appendChild(main);
}
