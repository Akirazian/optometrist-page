import frontdoor from "../assets/frontdoor.jpg"
import buildYelp from "./yelp";

const buildHome = () => {
  const homepage = document.createElement("div");
  homepage.classList.add("container", "home-content", "mb-5");

  const buildLevel = () => {
    const level = document.createElement("div");
    level.classList.add("level", "block", "is-mobile");

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

    homepage.append(level, hr);
  }

  const buildMain = () => {
    const homepageMain = document.createElement("div");
    homepageMain.classList.add("columns", "is-centered");

    //Build image column

    const imageContainer = document.createElement("div");
    imageContainer.classList.add("column");

    const figure = document.createElement("figure");
    figure.classList.add("image");

    const image = document.createElement("img");
    image.src = frontdoor;
    image.alt = "The front door of our office";

    //build text column
    const homepageText = document.createElement("div");
    homepageText.classList.add("column", "content", "is-medium", "has-text-centered");
    
    const h1 = document.createElement("h1");
    h1.innerText = "Revolution Eyes";
    const p1 = document.createElement("p");
    p1.innerText = "We provide best-in-class eye care for adults and children, and offer a wide selection of luxury eyeglass brands.";
    const p2 = document.createElement("p");
    p2.innerText = "Servicing downtown Manhattan since 2014";
    const map = document.createElement("iframe");
    map.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12096.518601525015!2d-74.0097192!3d40.7151623!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x94d3d09046292216!2sRevolution%20Eyes!5e0!3m2!1sen!2sus!4v1635041500047!5m2!1sen!2sus";
    map.id = "map";
    map.allowFullscreen = "";

    const hr = document.createElement("hr");

    figure.appendChild(image);
    imageContainer.appendChild(figure);
    homepageText.append(h1, p1, p2, hr, map);
    homepageMain.append(imageContainer, homepageText);
    homepage.appendChild(homepageMain);
  }

  const hr = document.createElement("hr");

  buildLevel();
  buildMain();
  homepage.appendChild(hr);
  homepage.appendChild(buildYelp());
  content.appendChild(homepage);
}

export default buildHome;