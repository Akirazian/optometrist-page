import buildHeader from "./scripts/header";
import buildHome from "./scripts/homepage";
import navHelper from "./scripts/navHelper";
import buildFooter from "./scripts/footer";
import './style.css';

const content = document.getElementById("content");

content.innerText = "";

buildHeader();
navHelper();
buildHome();
buildFooter();
