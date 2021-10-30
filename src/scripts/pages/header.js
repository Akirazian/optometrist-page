import makeElement from "../helpers/makeElement";

const buildHeader = () => {

  const body = document.querySelector("body");

  const navbar = document.createElement("header");
  navbar.classList.add("navbar", "is-spaced", "is-dark");
  navbar.ariaLabel = "main navigation"

  const buildBrand = () => {
    const navbarBrand = makeElement("div", null, ["navbar-brand"]);

    const brand = makeElement("a", "homepage", ["navbar-item"]);
    brand.href = "#";

    const revolution = makeElement("span", "revolution",  ["revolution", "brand"], "Revolution");
    const eyes = document.createElement("span");
    eyes.innerText = "Eyes";

    const hamburger = document.createElement("a");
    hamburger.classList.add("navbar-burger");
    hamburger.ariaLabel = "menu";

    for (let i = 0; i < 3; i++) {
      const burgerSlice = document.createElement("span");
      burgerSlice.ariaHidden = "true";
      hamburger.appendChild(burgerSlice);
    } 

    brand.append(revolution, eyes);
    navbarBrand.append(brand, hamburger);
    navbar.append(navbarBrand);
  }

  const buildMenu = () => {
    const navbarMenu = document.createElement("div");
    navbarMenu.classList.add("navbar-menu");

    const navbarStart = document.createElement("div");
    navbarStart.classList.add("navbar-start");

    const navbarEnd = document.createElement("navbar-end");
    navbarEnd.classList.add("navbar-end");

    for (let i = 0; i < 3; i++) {
      const link = document.createElement("a");
      link.classList.add("navbar-item", "is-tab");
      link.href = "#"
      switch (i) {
        case 0:
          link.id = "aboutUs";
          link.innerText = "About Us";
          break;
        case 1:
          link.id = "services"
          link.innerText = "Services";
          break;
        case 2:
          link.id = "contact"
          link.innerText = "Contact";
          break;
      }

      navbarEnd.appendChild(link);
    }

    navbarMenu.append(navbarStart, navbarEnd);
    navbar.append(navbarMenu);
  }

  const buildLevel = () => {
    const level = document.createElement("div");
    level.classList.add("level", "is-mobile", "mt-5");
  
    const addressContainer = document.createElement("div");
    addressContainer.classList.add("level-item", "has-text-centered");
  
    const address = document.createElement("div");
    address.classList.add("address");
  
    for (let i = 0; i < 2; i++) {
      const line = document.createElement("p");
      switch (i) {
        case 0:
          line.innerText = "82 West Broadway";
          break;
        case 1:
          line.innerText = "New York, NY 10007";
          break;       
      }
      address.appendChild(line);
    }
  
    const phoneContainer = document.createElement("div");
    phoneContainer.classList.add("level-item", "has-text-centered");
  
    const phoneNumber = document.createElement("a");
    phoneNumber.classList.add("button", "is-medium", "is-link", "is-light");
    phoneNumber.href = "tel:212-609-1111";
    phoneNumber.innerText = "212-608-1111";
  
    addressContainer.appendChild(address);
    phoneContainer.appendChild(phoneNumber);
    level.append(addressContainer, phoneContainer);
  
    const hr = document.createElement("hr");
  
    body.prepend(level, hr);
  }

  buildBrand();
  buildMenu();
  buildLevel();
  body.prepend(navbar);
}

export default buildHeader;