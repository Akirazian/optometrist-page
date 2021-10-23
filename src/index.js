import buildHeader from "./header";
import buildHome from "./homepage";
import navHelper from "./navHelper";

const content = document.getElementById("content");

content.innerHTML = "";

buildHeader();
navHelper();
buildHome();
