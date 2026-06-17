const menuBtn = document.querySelector(".menu");
const navLinks = document.querySelector("nav a");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
