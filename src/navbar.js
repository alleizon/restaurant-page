export const navbar = () => {
  const nav = document.createElement("nav");
  const links = ["Home", "About", "Menu", "Contact"];
  links.forEach((link) => {
    const a = document.createElement("a");
    a.textContent = link;
    nav.appendChild(a);
  });
  document.querySelector("#content").appendChild(nav);
};
