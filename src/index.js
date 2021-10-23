import buildHeader from "./scripts/header";
import buildHome from "./scripts/homepage";
import navHelper from "./scripts/navHelper";
import './scripts/style.css';

const content = document.getElementById("content");

content.innerHTML = "";

buildHeader();
navHelper();
buildHome();
