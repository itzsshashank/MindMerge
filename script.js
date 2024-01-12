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
  
