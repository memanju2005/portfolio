const menuIcon = document.getElementById("menuIcon");
const closeIcon = document.getElementById("closeIcon");

const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => {
  console.log("clicked");
  navLinks.classList.toggle("show");
  menuIcon.classList.toggle("hide");
  closeIcon.classList.toggle("show");
});
closeIcon.addEventListener("click", () => {
  console.log("clicked");
  navLinks.classList.toggle("show");
  menuIcon.classList.toggle("hide");
  closeIcon.classList.toggle("show");
});
// loading animation
window.addEventListener("load", () => {
    const loader = document.getElementById("load_container");
    loader.classList.add("fade-out");
  
    // Optional: remove from DOM after fade-out
    setTimeout(() => {
      loader.remove();
    }, 500); // match the CSS transition time
  });
  


  // typing effet
 
  const textToType = "Frontend developer and computer science student passionate about building responsive, user-friendly websites.";
  const typedText = document.getElementById("typed-text");
  const cursor = document.getElementById("cursor");

  let index = 0;
  let started = false;

  function typeEffect() {
    if (index < textToType.length) {
      typedText.textContent += textToType.charAt(index);
      index++;
      const randomDelay = Math.floor(Math.random() * 80) + 30;
      setTimeout(typeEffect, randomDelay);
    }
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !started) {
        started = true;
        typeEffect();
      }
    });
  }, { threshold: 0.5 });

  observer.observe(document.getElementById("typing-target"));

// form disapppearing logic with thank you

  const form = document.getElementById("contactForm");
  const thankYouSection = document.getElementById("thank-you");

  form.addEventListener("submit", async function (e) {
    e.preventDefault(); // 🚫 Prevents redirect

    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/xldnneyy", {
      method: "POST",
      headers: {
        'Accept': 'application/json'
      },
      body: formData
    });

    if (response.ok) {
      form.style.display = "none";
      thankYouSection.style.display = "block";
    } else {
      alert("Something went wrong. Please try again.");
    }
  });



