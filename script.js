// Drag-to-scroll functionality for the horizontal product grid
const slider = document.querySelector(".product-grid");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2; // Adjust scroll speed as needed
  slider.scrollLeft = scrollLeft - walk;
});

// Hamburger menu toggle functionality
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// Contact form submission handling with dialog popup
const contactForm = document.getElementById("contactForm");
const contactDialog = document.getElementById("contactDialog");
const closeDialogBtn = document.getElementById("closeDialog");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // Here you might add code to actually send the form data via AJAX.

  // Show the dialog
  contactDialog.showModal();
});

closeDialogBtn.addEventListener("click", () => {
  contactDialog.close();
  // Optionally reset the form after closing the dialog
  contactForm.reset();
});
