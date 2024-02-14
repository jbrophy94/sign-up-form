"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".acct-btn");
  const pwd = document.querySelector(".password");
  const confirmation = document.querySelector(".confirm");

  //Create password checking functionality
  btn.addEventListener("click", function (e) {
    if (confirmation.value !== pwd.value) {
      e.preventDefault();
      console.log("prevent def");
      alert("Passwords do not match");
    }
  });
});
