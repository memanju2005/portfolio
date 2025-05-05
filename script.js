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

