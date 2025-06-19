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
  const penguine=document.getElementById("penguine");

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
    penguine.style.display = "flex";

  // Delay the transition to thankYouSection
    setTimeout(() => {
      penguine.style.display = "none";
      thankYouSection.style.display = "block";
    }, 1000); // 1500ms = 1.5 seconds
} else {
  alert("Something went wrong. Please try again.");
}

  });


// text nimation logic on
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const el = entry.target;
    if (entry.isIntersecting) {
      el.classList.remove("revealed"); // reset class
      void el.offsetWidth; // force reflow to restart animation
      el.classList.add("revealed");
    }
  });
});

document.querySelectorAll(".compress-reveal").forEach(el => {
  observer2.observe(el);
});

//anmation of hero section  grabbing


  window.addEventListener("load", () => {
    // Delay observer setup for 500ms after page load
    setTimeout(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add("visible");
            

          } 
          // else {
          //   el.classList.remove("visible"); // remove for re-animation
          // }
        });
      });
      
      

      document.querySelectorAll(".scroll-up-reveal").forEach(el => {
        observer.observe(el);
      });
      //
    }, 600); // 500ms delay after page load

   
  });

  window.addEventListener('load',function(){
    setTimeout(function(){
      document.getElementById('grabhand').classList.add('hidden');
    
    },1800);
  });


