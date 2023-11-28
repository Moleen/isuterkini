
document.addEventListener("DOMContentLoaded", function () {
    const navCheckbox = document.getElementById("nav-check");
    const navLinks = document.querySelector(".nav-links");

    navCheckbox.addEventListener("change", function () {
        navLinks.style.display = navCheckbox.checked ? "block" : "none";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const currentYear = new Date().getFullYear();
    const footerYear = document.querySelector(".footer-bottom p");

    footerYear.textContent = `copyright © ${currentYear} PilpresKini`;
});