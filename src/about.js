import { navbar } from "./navbar";

export const AboutPage = (() => {
  const content = document.querySelector("#content");

  const renderPage = () => {
    content.classList.add("about");
    navbar();
    createAmenities();
    createAboutUs();
    createGallery();
  };

  const createAmenities = () => {
    const amenities = document.createElement("div");
    amenities.classList.add("amenities");
    const h1 = document.createElement("h1");
    h1.textContent = "Amenities";
    amenities.appendChild(h1);

    const icons = {
      delivery: ["fa-truck", "Home Delivery"],
      takeaway: ["fa-bag-shopping", "Take Away"],
      payment: ["fa-credit-card", "Multiple Payment Mode"],
      party: ["fa-gift", "Party Orders"],
    };

    for (let key in icons) {
      const outerDiv = document.createElement("div");
      const innerDiv = document.createElement("div");
      innerDiv.classList.add("icon");
      const i = document.createElement("i");
      i.classList.add("fa-solid", icons[key][0]);
      innerDiv.appendChild(i);
      const h2 = document.createElement("h2");
      h2.textContent = icons[key][1];
      outerDiv.appendChild(innerDiv);
      outerDiv.appendChild(h2);
      amenities.appendChild(outerDiv);
    }
    content.appendChild(amenities);
  };

  const createAboutUs = () => {
    const aboutUs = document.createElement("div");
    aboutUs.classList.add("about-us");

    const left = document.createElement("div");
    left.classList.add("left");
    aboutUs.appendChild(left);
    const h1 = document.createElement("h1");
    h1.textContent = "About Us";
    const p = document.createElement("p");
    p.textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolorem, expedita illum inventore praesentium ipsum sit, temporibus similique aliquam ab nostrum tenetur. Optio eius doloremque voluptatem cum, quibusdam ducimus sunt?";
    p.style.textAlign = "center";
    left.append(h1, p);

    const right = document.createElement("div");
    right.classList.add("right");
    aboutUs.appendChild(right);
    content.appendChild(aboutUs);
  };

  const createGallery = () => {
    const gallery = document.createElement("div");
    gallery.classList.add("gallery");

    const h1 = document.createElement("h1");
    h1.textContent = "Gallery";
    gallery.append(h1);
    const sources = [
      "https://unsplash.com/photos/LO7rNP0LRro",
      "https://m.apkpure.com/bn/chinese-food-wallpapers/com.zoomapps.ChineseFoodWallpapers#com.zoomapps.ChineseFoodWallpapers-5",
      "https://pinterest.com/pin/111182684542301957/",
    ];
    for (let i = 0; i < 3; i += 1) {
      const imgDiv = document.createElement("div");
      const a = document.createElement("a");
      a.setAttribute("href", sources[i]);
      imgDiv.appendChild(a);
      gallery.appendChild(imgDiv);
    }

    content.append(gallery);
  };

  const removePage = () => {
    content.classList.remove("about");
    while (content.firstElementChild) content.firstElementChild.remove();
  };

  return { renderPage, removePage };
})();
