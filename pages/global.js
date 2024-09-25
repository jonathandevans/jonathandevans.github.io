"use strict";

const header = document.querySelector("header");

const mobileNavSetup = () => {
  const toggleHeader = () => {
    header.classList.toggle("open");
  };

  document.querySelector(".hamburger").addEventListener("click", toggleHeader);
  document.querySelectorAll(".mobile-nav a").forEach((item) => item.addEventListener("click", toggleHeader));
};

document.body.onload = mobileNavSetup;