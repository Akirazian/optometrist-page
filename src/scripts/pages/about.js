import makeElement from "../helpers/makeElement";
import logo from "../../assets/logo.jpg";
import sharmaPic from "../../assets/default.jpg"
import leePic from "../../assets/default.jpg"

const aboutUs = makeElement("div", "about-us", ["container", "page", "mb-5"]);

const hr = makeElement("hr");

const introSection = (() => {
  const imageContainer = makeElement("figure", null, ["image", "mb-3"]);
  const image = makeElement("img", "logo");
  image.src = logo;
  imageContainer.appendChild(image);

  const introSection = makeElement("div", null, ["content", "has-text-centered"]);
  const heading = makeElement("h1", null, ["mt-1"], "About Us");
  const intro = makeElement("p", null, ["small-box"], "Founded in 2011, Revolution Eyes is owned and operated by the same doctors you see at your appointments. We provide high quality care to each and every patient, tailored to their specific needs.");
  const extra = makeElement("p", null, null, "We are proud to be a local, independent business.")
  introSection.append(imageContainer, heading, intro, extra);

  return introSection
})();

const doctorSection = (() => {
  const doctorSection = makeElement("div", null, ["content"]);
  const heading = makeElement("h1", null, ["has-text-centered"], "Our Doctors")

  const makeDoctor = (name, bio, school, img) => {
    const doctor = makeElement("div", null, ["content", "doctor"]);
    const imgContainer = makeElement("figure", null, ["image"]);
    const image = makeElement("img", null, ["profile-pic", "is-rounded"]);
    image.src = img;
    const bioContainer = makeElement("div", null, ["bio"]);
    const bioHeader = makeElement("h4", null, null, name)
    const bio1 = makeElement("p", null, null, bio);
    const bio2 = makeElement("p", null, null, school);
    
    imgContainer.appendChild(image);
    bioContainer.append(bioHeader, bio1, bio2);
    doctor.append(imgContainer, bioContainer);
    return doctor;
  };

  let doctorSharma = makeDoctor(
    "Dr. Ashish Sharma, O.D.", 
    "Dr. Sharma has been treating patients for a long time. He loves diagnosing patients and getting them great prescriptions for eyeglasses or contacts.", 
    "Dr. Sharma studied at a good school for optometry.",
    sharmaPic
  );

  let doctorLee = makeDoctor(
    "Dr. Jeremy Lee, O.D.",
    "Dr. Lee has practiced optometry here for a bunch of time. Patients love him. He also likes reading good books about stuff.",
    "Dr. Lee also went to a real great school for optometry",
    leePic
  );

  doctorSection.append(heading, doctorSharma, doctorLee);


  return doctorSection;
})();


aboutUs.append(introSection, hr, doctorSection);

export default aboutUs;