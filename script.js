document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");

  function handleScroll() {
    if (window.scrollY > 700) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  handleScroll();

  window.addEventListener("scroll", handleScroll);

  const element = document.getElementById("box");

  element.addEventListener("pointerenter", (e) => {
    if (e.pointerType === "mouse") {
      // User hovered with a mouse
      console.log("Hovered with mouse");
      element.classList.add("hovered");
    }
  });

  element.addEventListener("pointerleave", (e) => {
    if (e.pointerType === "mouse") {
      element.classList.remove("hovered");
    }
  });

  const hamburger = document.getElementById("hamburgerToggle");
  const sidebar = document.getElementById("mobileSidebar");
  const overlay = document.getElementById("sidebarOverlay");
  const closeBtn = document.getElementById("closeBtn");

  hamburger.addEventListener("click", function () {
    sidebar.classList.toggle("active");
    overlay.classList.remove("hidden");
  });

  const sidebarLinks = sidebar.querySelectorAll("a");
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", () => {
      sidebar.classList.remove("active");
      overlay.classList.add("hidden");
    });
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.add("hidden");
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.add("hidden");
  });
});
