import GameFetcher from "./games.js";
import Ui from "./ui.js";
import Details from "./details.js";

document.addEventListener("DOMContentLoaded", () => {
  const ui = new Ui();
  const details = new Details(ui);
  const gameFetcher = new GameFetcher(ui);
  gameFetcher.attachEventListeners();
  gameFetcher.setDefaultCategory();
  details.getDetailsById();
  details.closeDetails();
});

// -------------------------navbar-------------------------------
$(document).ready(function () {
  var navbar = $("#navbar");
  var offset = navbar.offset().top;

  $(window).scroll(function () {
    if ($(window).scrollTop() >= offset) {
      navbar.removeClass("offset-navbar").addClass("fixed-top-custom");
    } else {
      navbar.removeClass("fixed-top-custom").addClass("offset-navbar");
    }
  });
});
