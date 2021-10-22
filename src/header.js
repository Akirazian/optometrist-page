const buildHeader = () => {

  const navbar = document.createElement("nav");
  navbar.classList.add("navbar", "is-spaced", "is-dark");
  navbar.ariaLabel = "main navigation"

  const buildBrand = () => {
    const navbarBrand = document.createElement("div");
    navbarBrand.classList.add("navbar-brand");

    const brand = document.createElement("a");
    brand.classList.add("navbar-item");
    brand.href = "#";

    const revolution = document.createElement("span");
    revolution.style = "color: orange;";
    revolution.innerText = "Revolution";
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
          link.innerText = "Our Doctors";
          break;
        case 1:
          link.innerText = "Services";
          break;
        case 2:
          link.innerText = "Contact";
          break;
      }

      navbarEnd.appendChild(link);
    }

    navbarMenu.append(navbarStart, navbarEnd);
    navbar.append(navbarMenu);
  }

  buildBrand();
  buildMenu();
  container.append(navbar);
}

export default buildHeader;