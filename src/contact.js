import { navbar } from "./navbar";

export const ContactPage = (() => {
  const content = document.querySelector("#content");

  const renderPage = () => {
    content.classList.add("contact");
    navbar();
    createInfo();
  };

  const createInfo = () => {
    const body = document.createElement("div");
    content.appendChild(body);
    createCard(body);
    body.classList.add("body");
  };

  const createCard = (body) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const h1 = document.createElement("h1");
    h1.textContent = "Get in contact";
    card.appendChild(h1);

    const addAdress = () => {
      const contact = {
        phone: "(+86) 130 638 901 61",
        street: "Nan Tang Bin Lu 116hao 2hao Lou",
        address: "LuWan District, Shanghai, 200071",
      };
      const phone = document.createElement("h2");
      phone.innerHTML = `<span>Phone number: </span> ${contact.phone}`;
      const street = document.createElement("h2");
      street.innerHTML = `<span>Street: </span> ${contact.street}`;
      const address = document.createElement("h2");
      address.innerHTML = `<span>City Area: </span> ${contact.address}`;
      card.append(phone, street, address);
    };
    addAdress();

    const message = document.createElement("h1");
    message.textContent = "Write us a message";
    card.appendChild(message);

    const addForm = () => {
      const fields = ["first-name", "last-name", "message"];
      fields.forEach((field) => {
        const label = document.createElement("label");
        const input =
          field === "message"
            ? document.createElement("textarea")
            : document.createElement("input");
        label.textContent =
          field
            .split("-")
            .map((word) => word[0].toUpperCase() + word.substring(1))
            .join(" ") + ":";
        label.setAttribute("for", field);
        if (!(field === "message")) input.setAttribute("type", "text");
        else {
          input.cols = "25";
          input.rows = "5";
        }
        input.id = input.name = field;
        input.setAttribute("autocomplete", "off");

        card.append(label, input);
      });
    };
    addForm();

    body.appendChild(card);
  };

  const removePage = () => {
    content.classList.remove("contact");
    while (content.firstElementChild) content.firstElementChild.remove();
  };

  return { renderPage, removePage };
})();
