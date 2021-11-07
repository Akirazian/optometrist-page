import makeElement from "../helpers/makeElement";
import frontdoor from "../../assets/frontdoor.jpg";

const services = makeElement("div", "services", ["container", "page", "mb-5"]);
const hr = makeElement("hr");

const intro = (() => {
  let container = makeElement("div", null, ["content", "mb-7", "has-text-centered"]);
  const header = makeElement("h1", null, ["title"], "Services");
  container.append(header);

  return container 
})();

const procedures = (() => {
  let container = makeElement("div", null, ["columns", "mt-3"]);

  let imageContainer = makeElement("figure", null, ["image"]);
  let image = makeElement("img");
  image.src = frontdoor;
  imageContainer.appendChild(image);

  let listContainer = makeElement("div", null, ["column", "is-vcentered", "has-text-centered"]);
  let intro = makeElement("div", null, ["content", "mb-0", "is-large", "has-text-weight-bold"], "Our doctors provide the following services:");
  let list = makeElement("ul", null, ["column", "has-text-centered", "list"]);
  let items = ["Comprehensive Eye Exams", "Contact Lens Fittings", "Contact Lens Insertion and Removal Training", "Red Eye Exams", "Dry Eye Treatment", "Contact Lens Removal"]
  for (let i = 0; i < items.length; i++) {
    let item = makeElement("li");
    item.innerText = items[i];
    list.appendChild(item);
  }
  let insurance = makeElement("div", null, ["content", "mt-4", "has-text-weight-bold", "is-large"], "We accept VSP, EyeMed, Aetna, and Davis Vision.")
  let note = makeElement("div", null, ["content", "mt-4", "is-medium"], "Please note that we are not in-network for ANY medical insurance.")


  listContainer.append(intro, list, hr, insurance, note);

  container.append(imageContainer, listContainer);

  return container;
})();

services.append(intro, procedures);

export default services;