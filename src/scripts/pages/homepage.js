import frontdoor from "../../assets/frontdoor.jpg"
import yelpContainer from "../helpers/yelp";
import makeElement from "../helpers/makeElement";
import logo from "../../assets/logo.jpg"

const homepage = makeElement("div", null, ["container", "page", "mb-5"]);

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
  const homepageText = makeElement("div", null, ["column", "content", "is-family-monospace", "has-text-centered"]);
  
  const h1 = makeElement("img");
  h1.src = logo;
  const p1 = makeElement("p", null, null, "We provide best-in-class eye care for adults and children, and offer a wide selection of luxury eyeglass brands.");
  const p2 = makeElement("p", null, null, "Open Monday-Friday, 10:30am-6:30pm");
  const p3 = makeElement("p", null, null, "Servicing downtown Manhattan since 2011");
  const map = document.createElement("iframe");
  map.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12096.518601525015!2d-74.0097192!3d40.7151623!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x94d3d09046292216!2sRevolution%20Eyes!5e0!3m2!1sen!2sus!4v1635041500047!5m2!1sen!2sus";
  map.id = "map";
  map.allowFullscreen = "";

  const hr = document.createElement("hr");

  figure.appendChild(image);
  imageContainer.appendChild(figure);
  homepageText.append(h1, p1, p2, p3, hr, map);
  homepageMain.append(imageContainer, homepageText);
  homepage.appendChild(homepageMain);
}

const hr = document.createElement("hr");

buildMain();
homepage.appendChild(hr);
homepage.appendChild(yelpContainer);

export default homepage;