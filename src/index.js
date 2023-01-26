import { HomePage } from "./home";
import { ContactPage } from "./contact";
import { AboutPage } from "./about";
import { MenuPage } from "./menu";

export default (() => {
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
        curPage = HomePage;
        break;
    }
    curPage.renderPage();
    if (curPage == HomePage) addhomePageEL();
  };

  const addhomePageEL = () => {
    const links = Array.from(document.querySelectorAll(".home-nav-btn"));
    links.forEach((link) => {
      link.addEventListener("click", changePage);
    });
  };
  addhomePageEL();

  return { changePage };
})();
