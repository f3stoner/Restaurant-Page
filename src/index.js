import "./styles.css";
import { loadHome } from "./home-page.js";
import { loadMenu } from "./menu-page.js";
import { loadAbout } from "./about-page.js";

const menuBtn = document.getElementById("menu");
const homeBtn = document.getElementById("home");
const aboutBtn = document.getElementById("about");

homeBtn.addEventListener("click", () => {loadHome()});
menuBtn.addEventListener("click", () => {loadMenu()});
aboutBtn.addEventListener("click", () => {loadAbout()});

loadHome();


