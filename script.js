function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    adjustTextColor();
}

function adjustTextColor() {
    const isDarkMode = document.body.classList.contains("dark-mode");
    const textColor = isDarkMode ? "white" : "black";

    // Set text color for elements with class 'dark-mode-text'
    const textElements = document.getElementsByClassName("dark-mode-text");
    for (let i = 0; i < textElements.length; i++) {
        textElements[i].style.color = textColor;
    }
}

function submitForm(event) {
    event.preventDefault();

    // Simple form validation
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill in all fields before submitting.");
        return;
    }

    alert(`Thank you, ${name}! Your message has been submitted.`);
    document.getElementById("contactForm").reset();
}

  
  function submitForm(event) {
    event.preventDefault();
  
    // Simple form validation
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
  
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();
  
    if (!name || !email || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }
  
    // Additional check for a valid email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    alert(`Thank you, ${name}! Your message has been submitted.`);
    document.getElementById("contactForm").reset();
  }

function exploreButtonClick() {
    const button = document.querySelector('.cta-button');
    button.textContent = 'Keep Exploring!';
  }
  
// Add this JavaScript code for mobile menu toggle

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
}
// script.js

// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Function to submit the contact form
function submitForm(event) {
  event.preventDefault();

// Add an interactive header on scroll
document.addEventListener("scroll", function () {
  const header = document.querySelector("header");

  // Add a shadow to the header when scrolled
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
// Add parallax scrolling effect
document.addEventListener("scroll", function () {
  const parallaxSection = document.querySelector(".parallax");
  const scrollPosition = window.scrollY;

  // Adjust the parallax effect based on your preference
  parallaxSection.style.backgroundPositionY = -scrollPosition * 0.5 + "px";
});
  
  
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Glide.js carousel
  new Glide('.glide', {
    type: 'carousel',
    autoplay: 3000, // Set autoplay duration in milliseconds (optional)
    hoverpause: true, // Pause on hover (optional)
  }).mount();
});

  document.addEventListener("scroll", function () {
  var element = document.querySelector(".magical-element");
  var position = element.getBoundingClientRect().top;
  var screenHeight = window.innerHeight;

  if (position < screenHeight * 0.75) {
    element.classList.add("active");
  }
});

// Toggle hamburger menu on click 
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("open");
}

document.addEventListener("click", e => {
  if (!e.target.matches('.hamburger') && !e.target.matches('#nav-links li')) {
    document.getElementById("nav-links").classList.remove("open");
  }
});

window.onscroll = function () {
  const nav = document.querySelector("nav");
  if (window.pageYOffset > 100) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};
