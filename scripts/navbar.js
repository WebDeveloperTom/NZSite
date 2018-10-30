let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");
//When burger icon is click, add/remove "active" class
navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});
