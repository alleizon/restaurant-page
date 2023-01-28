import { navbar } from "./navbar";
import stirFry from "./images/beef-and-veggy-stir-fry.jpg";
import dumplings from "./images/dumplings.jpg";
import orangeChicken from "./images/orange-chicken.jpg";
import zhaJiang from "./images/Zha+Jiang+Mian+Recipes+-+Eat+Cho+Food.jpg";

export const MenuPage = (() => {
  const content = document.querySelector("#content");

  const renderPage = () => {
    content.classList.add("menu");
    navbar();
    createMenu();
  };

  const createMenu = () => {
    const h1 = document.createElement("h1");
    h1.textContent = "We Serve";
    content.appendChild(h1);
    const food = [
      [stirFry, dumplings, orangeChicken, zhaJiang],
      [
        "Beef and vegetable stir fry",
        "Dumplings",
        "Orange Chicken",
        "Zhájiàng Miàn (noodles with bean paste)",
      ],
    ];
    for (let i = 0; i < 4; i += 1) {
      const text = document.createElement("p");
      const price = Math.floor(Math.random() * 1000 + 2000) / 100;
      text.innerHTML = `${food[1][i]}<br>Price: $${price}`;
      const img = document.createElement("img");
      img.setAttribute("src", food[0][i]);
      content.append(text, img);
    }
  };

  const removePage = () => {
    content.classList.remove("menu");
    while (content.firstElementChild) content.firstElementChild.remove();
  };

  return { renderPage, removePage };
})();
