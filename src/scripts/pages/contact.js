import makeElement from "../helpers/makeElement";
import logo from "../../assets/logo.jpg"

const contact = makeElement("div", "contact", ["container", "page", "mb-5"]);
const hr = makeElement("hr");

const introSection = (() => {
  const imageContainer = makeElement("figure", null, ["image", "mb-3"]);
  const image = makeElement("img", "logo");
  image.src = logo;
  imageContainer.appendChild(image);

  const introSection = makeElement("div", null, ["content", "has-text-centered"]);
  const heading = makeElement("h1", null, ["mt-1"], "Contact Us");
  const intro = makeElement("p", null, ["small-box"], "Revolution Eyes can be reached at 212-608-1111, or the email below");
  const extra = makeElement("a", null, null, "revolutioneyes82@gmail.com")
  extra.href = "mailto:revolutioneyes82@gmail.com";
  introSection.append(imageContainer, heading, hr, intro, extra);

  return introSection
})();

const map = document.createElement("iframe");
  map.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12096.518601525015!2d-74.0097192!3d40.7151623!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x94d3d09046292216!2sRevolution%20Eyes!5e0!3m2!1sen!2sus!4v1635041500047!5m2!1sen!2sus";
  map.id = "map";
  map.allowFullscreen = "";

contact.append(introSection);

export default contact;