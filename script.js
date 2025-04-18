const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");

menuIcon.addEventListener("click", () => {
    navLinks.classList.toggle("show");
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
  
  