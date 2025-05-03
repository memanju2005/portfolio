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
  
  