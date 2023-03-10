export const HomePage = (() => {
  const content = document.querySelector("#content");

  const createLinkBtns = (linkWrapper) => {
    const links = ["About", "Menu", "Contact"];
    links.forEach((link) => {
      const a = document.createElement("a");
      a.id = `${link}`;
      a.classList.add("home-nav-btn");
      a.textContent = link;
      linkWrapper.appendChild(a);
    });
  };

  const createBgText = () => {
    const bgText = document.createElement("div");
    bgText.classList.add("bg-text");
    const header = document.createElement("h1");
    header.textContent = "Discover Chinese Cuisine";
    bgText.appendChild(header);
    const linkWrapper = document.createElement("div");
    linkWrapper.classList.add("link-wrapper");
    bgText.appendChild(linkWrapper);
    createLinkBtns(linkWrapper);
    content.appendChild(bgText);
  };

  const createFooter = () => {
    const footer = document.createElement("footer");
    footer.classList.add("main-page-footer");
    const authorLink = document.createElement("a");
    authorLink.textContent = "Orijit Chatterjee";
    authorLink.setAttribute("href", "https://unsplash.com/@orijit57");
    const sourceLink = document.createElement("a");
    sourceLink.textContent = "Unsplash";
    sourceLink.setAttribute("href", "https://unsplash.com/photos/wEBg_pYtynw");
    footer.innerHTML = `Image by ${authorLink.outerHTML} on ${sourceLink.outerHTML}`;
    content.appendChild(footer);
  };

  const renderPage = () => {
    content.className = "";
    content.classList.add("home");
    createBgText();
    createFooter();
  };

  const removePage = () => {
    content.classList.remove("home");
    while (content.firstElementChild) content.firstElementChild.remove();
  };

  return { renderPage, removePage };
})();
