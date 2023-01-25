import { navbar } from "./navbar";

export const AboutPage = (() => {
  const content = document.querySelector("#content");

  const renderPage = () => {
    navbar();
  };

  const removePage = () => {
    content.classList.remove("about");
    while (content.firstElementChild) content.firstElementChild.remove();
  };

  return { renderPage, removePage };
})();
