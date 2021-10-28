import buildHeader from "./scripts/pages/header";
import homepage from "./scripts/pages/homepage";
import buildFooter from "./scripts/pages/footer";
import aboutUs from "./scripts/pages/about";
import navHelper from "./scripts/helpers/navHelper";
import './style.css';

const page = (() => {
  const content = document.getElementById("content");
  content.innerText = "";

  const load = (page) => {
    content.innerText = "";
    content.appendChild(page);
  }

  const change = (event) => {
    let page = event.target.id;
    switch (page) {
      case "aboutUs":
        load(aboutUs)
        break;
    }
  }
  
  return {
    load,
    change
  }
})();


buildHeader();
navHelper();
buildFooter();
page.load(homepage);

const links = document.querySelectorAll(".is-tab");
links.forEach(link => { link.addEventListener("click", page.change)});
const brand = document.querySelector("navbar-brand");
brand.addEventListener("click", page.load(homepage));
