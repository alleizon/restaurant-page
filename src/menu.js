import { navbar } from "./navbar";

export const MenuPage = (() => {
  const content = document.querySelector("#content");

  const renderPage = () => {
    navbar();
  };

  const removePage = () => {
    content.classList.remove("remove");
    while (content.firstElementChild) content.firstElementChild.remove();
  };

  return { renderPage, removePage };
})();
