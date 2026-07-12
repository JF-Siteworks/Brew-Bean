document.addEventListener("DOMContentLoaded", function () {
  const map = document.querySelector(".map");
  const overlay = document.querySelector(".map-overlay");
  if (map && overlay) {
    map.addEventListener("mouseenter", function () {
      overlay.style.transform = "scale(0)";
    });
    map.addEventListener("mouseleave", function () {
      overlay.style.transform = "";
    });
  }

  const hamburger = document.getElementById("hamburgerToggle");
  const sidebar = document.getElementById("mobileSidebar");
  const closeBtn = document.getElementById("closeBtn");
  const sOverlay = document.getElementById("sidebarOverlay");

  hamburger.addEventListener("click", function () {
    sidebar.classList.toggle("active");
    sOverlay.classList.remove("hidden")
  });

  const sidebarLinks = sidebar.querySelectorAll("a");
  sidebarLinks.forEach((link) => {
    link.addEventListener("click", () => {
      sidebar.classList.remove("active");
      sOverlay.classList.add("hidden");
    });
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
    sOverlay.classList.add("hidden")
  });

  sOverlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    sOverlay.classList.add("hidden");
  });
});
