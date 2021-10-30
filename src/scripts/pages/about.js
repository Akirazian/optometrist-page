import makeElement from "../helpers/makeElement";
import logo from "../../assets/logo.jpg";
import sharmaPic from "../../assets/sharmaPlaceholder.jpg"

const aboutUs = makeElement("div", "about-us", ["container", "page", "has-text-centered", "mb-5"]);

const introSection = (() => {
  const imageContainer = makeElement("figure", null, ["image", "mb-3"]);
  const image = makeElement("img", "logo");
  image.src = logo;
  imageContainer.appendChild(image);

  const introSection = makeElement("div", null, ["content"]);
  const heading = makeElement("h1", null, ["mt-1"], "About Us");
  const intro = makeElement("p", null, ["small-box"], "Founded in 2011, Revolution Eyes is owned and operated by the same doctors you see at your appointments. We provide high quality care to each and every patient, tailored to their specific needs.");
  const extra = makeElement("p", null, null, "We are proud to be a local, independent business.")
  introSection.append(imageContainer, heading, intro, extra);

  return introSection
})();

const doctorSection = (() => {
  const doctorSection = makeElement("div", null, ["content"]);
  const heading = makeElement("h1", null, null, "Our Doctors")

  const doctorSharma = (() => {
    const doctorSharma = makeElement("div", null, ["content"]);
    const imgContainer = makeElement("figure", null, ["image", "is-128x128"]);
    const image = makeElement("img", null, ["profile-pic", "is-rounded"]);
    image.src = sharmaPic;
    const bio = makeElement("p", null, null, "Dr. Sharma has been treating patients for a long time!");
    
    imgContainer.appendChild(image);
    doctorSharma.append(imgContainer, bio);
    return doctorSharma;
  })();

  doctorSection.append(heading, doctorSharma);

  return doctorSection;
})();

const hr = makeElement("hr");

aboutUs.append(introSection, hr, doctorSection);

export default aboutUs;