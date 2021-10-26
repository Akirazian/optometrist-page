import buildHeader from "./scripts/pages/header";
import homepage from "./scripts/pages/homepage";
import buildFooter from "./scripts/pages/footer";
import aboutUs from "./scripts/pages/about";
import navHelper from "./scripts/helpers/navHelper";
import './style.css';

const content = document.getElementById("content");
content.innerText = "";
content.classList.add("pt-5");

function pageChange(page) {
  content.innerText = "";
  content.appendChild(page);
}

buildHeader();
navHelper();
buildFooter();
pageChange(homepage);

