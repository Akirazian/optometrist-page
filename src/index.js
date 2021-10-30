import buildHeader from "./scripts/pages/header";
import homepage from "./scripts/pages/homepage";
import buildFooter from "./scripts/pages/footer";
import aboutUs from "./scripts/pages/about";
import './style.css';

buildHeader();
buildFooter();

const navHelper = (() => {
  const navBurger = document.querySelector(".navbar-burger");
  const navMenu = document.querySelector(".navbar-menu");

  const start = () => navBurger.addEventListener("click", toggleMenu);

  function toggleMenu() {
    navBurger.classList.toggle("is-active");
    navMenu.classList.toggle("is-active");
  }
  
  return {
    start,
    toggleMenu
  }
})();

const page = (() => {
  const content = document.getElementById("content");
  content.innerText = "";

  const load = (page) => {
    content.innerText = "";
    content.appendChild(page);
    navHelper.toggleMenu();
  }

  const change = (event) => {
    let page = event.currentTarget.id;
    switch (page) {
      case "homepage":
        load(homepage);
        break;
      case "aboutUs":
        load(aboutUs);
        break;
    }
  }
  
  return {
    load,
    change
  }
})();

page.load(aboutUs);
navHelper.start();

const links = document.querySelectorAll(".navbar-item");
links.forEach(link => { link.addEventListener("click", page.change)});
