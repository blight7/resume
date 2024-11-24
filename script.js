// Smooth Scroll for Anchor Links
document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a[href^='#']");
    
    links.forEach(link => {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetID = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetID);
  
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjust for navbar height
            behavior: "smooth"
          });
        }
      });
    });
  });
  
  // Responsive Navbar Toggle
  document.addEventListener("DOMContentLoaded", function () {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
  
    navbarToggler.addEventListener("click", function () {
      navbarCollapse.classList.toggle("show");
    });
  });
  