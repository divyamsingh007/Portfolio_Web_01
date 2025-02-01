let knowMoreBtn = document.getElementById("know-more-btn");

let nav_01 = document.getElementById("nav-01");
let about_me_sec = document.getElementById("about-me");
let nav_02 = document.getElementById("nav-02");
let education_sec = document.getElementById("education");
let nav_03 = document.getElementById("nav-03");
let nav_04 = document.getElementById("nav-04");
let nav_05 = document.getElementById("nav-05");

var rect = about_me_sec.getBoundingClientRect();
console.log(rect);


window.addEventListener("scroll", function () {
  var hasFired = false;

  if (document.body.scrollTop >= 752 && !hasFired) {
    hasFired = true;
    nav_01.classList.add("white-underline");
  }

  if (document.body.scrollTop < 250 && hasFired) {
    hasFired = false;
  }
});
