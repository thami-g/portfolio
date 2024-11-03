const header = document.querySelector("header");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header .navlist a");
console.log(navLinks);

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 100);
});
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};
window.addEventListener("scroll", () => {
  // menu.classList.remove("bx-x");
  // navlist.classList.remove("open");
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let heigth = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + heigth) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
});