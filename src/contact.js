import { navbar } from "./navbar";

export const ContactPage = (() => {
  const content = document.querySelector("#content");

  const renderPage = () => {
    navbar();
  };

  const removePage = () => {
    content.classList.remove("contact");
    while (content.firstElementChild) content.firstElementChild.remove();
  };

  return { renderPage, removePage };
})();
