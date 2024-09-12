const menuBar = document.querySelector(".icon-sqare");
const navBar = document.querySelector(".navigation");
const closeBar = document.querySelector("#close");
if (menuBar) {
  menuBar.addEventListener("click", () => {
    navBar.classList.add("active");
  });
}
if (closeBar) {
  closeBar.addEventListener("click", () => {
    navBar.classList.remove("active");
  });
}
// link navigation
const activePage = window.location.pathname;
const navLinks = document.querySelectorAll("nav a").forEach((link) => {
  if (link.href.includes(`${activePage}`)) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});
