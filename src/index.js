import { HomePage } from "./home";
import { ContactPage } from "./contact";
import { AboutPage } from "./about";
import { MenuPage } from "./menu";

const displayController = (() => {
  let curPage = HomePage;
  curPage.renderPage();

  const changePage = (page) => {
    const nPage = page.target.id;
    curPage.removePage();
    switch (nPage) {
      case "About":
        curPage = AboutPage;
        break;
      case "Contact":
        curPage = ContactPage;
        break;
      case "Menu":
        curPage = MenuPage;
        break;
      default:
        break;
    }
    curPage.renderPage();
  };

  const links = Array.from(document.querySelectorAll(".nav-btn"));
  links.forEach((link) => {
    link.addEventListener("click", changePage);
  });
})();
