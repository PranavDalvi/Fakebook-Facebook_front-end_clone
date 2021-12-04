"use strict";
const modal = document.querySelector(".searchbarModal");
const oldSearch = document.querySelector(".searchBar");
const btnHideModel = document.querySelector(".hideModal");
const bntShowModel = document.querySelector(".showModal");

const dropbtn = document.querySelector(".dropbtn");
const dropdownContent = document.querySelector(".dropdownContent");
const dropbtnMenu = document.querySelector(".dropbtnMenu");
const dropdownContentMenu = document.querySelector(".dropdownContentMenu");
const dropbtnMsg = document.querySelector(".dropbtnMsg");
const dropdownContentMsg = document.querySelector(".dropdownContentMsg");
const dropbtnNotify = document.querySelector(".dropbtnNotify");
const dropdownContentNotify = document.querySelector(".dropdownContentNotify");

const hideModel = function () {
  modal.classList.add("hidden");
  oldSearch.classList.remove("hidden");
};
const showModel = function () {
  modal.classList.remove("hidden");
  oldSearch.classList.add("hidden");
};

const hideAllDropdowns = function () {
  dropdownContent.classList.add("hidden");
  dropdownContentMenu.classList.add("hidden");
  dropdownContentMsg.classList.add("hidden");
  dropdownContentNotify.classList.add("hidden");
};

bntShowModel.addEventListener("click", function () {
  showModel();
  hideAllDropdowns();
});
btnHideModel.addEventListener("click", function () {
  hideModel();
  hideAllDropdowns();
});

dropbtn.addEventListener("click", function () {
  dropdownContent.classList.toggle("hidden");

  hideModel();
  dropdownContentMenu.classList.add("hidden");
  dropdownContentMsg.classList.add("hidden");
  dropdownContentNotify.classList.add("hidden");
});

dropbtnMenu.addEventListener("click", function () {
  dropdownContentMenu.classList.toggle("hidden");

  hideModel();
  dropdownContent.classList.add("hidden");
  dropdownContentMsg.classList.add("hidden");
  dropdownContentNotify.classList.add("hidden");
});

dropbtnMsg.addEventListener("click", function () {
  dropdownContentMsg.classList.toggle("hidden");

  hideModel();
  dropdownContent.classList.add("hidden");
  dropdownContentMenu.classList.add("hidden");
  dropdownContentNotify.classList.add("hidden");
});

dropbtnNotify.addEventListener("click", function () {
  dropdownContentNotify.classList.toggle("hidden");

  hideModel();
  dropdownContent.classList.add("hidden");
  dropdownContentMenu.classList.add("hidden");
  dropdownContentMsg.classList.add("hidden");
});
