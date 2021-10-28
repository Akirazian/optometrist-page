import makeElement from "../helpers/makeElement";
import logo from "../../assets/logo.jpg";
import window from "../../assets/window.jpg"

const aboutUs = makeElement("div", "about-us", ["container", "page", "has-text-centered", "mb-5"]);

const introSection = (() => {
  const imageContainer = makeElement("figure", null, ["image", "mb-3"]);
  const image = makeElement("img", "logo");
  image.src = logo;
  imageContainer.appendChild(image);

  const introSection = makeElement("div", null, ["content"])
  const heading = makeElement("h1", null, ["mt-1"], "About Us");
  const intro = makeElement("p", null, ["small-box"], "Founded in 2011, Revolution Eyes is owned and operated by the same doctors you see at your appointments. We provide high quality care to each and every patient, tailored to their specific needs.");
  const extra = makeElement("p", null, null, "We are proud to be a local, independent business.")
  introSection.append(imageContainer, heading, intro, extra);

  return introSection
})();

const hr = makeElement("hr");

aboutUs.append(introSection, hr);

export default aboutUs;