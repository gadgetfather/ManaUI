const hamburger = document.querySelector(".hamburger-menu");
const sidebar = document.querySelector(".sidebar-responsive");

hamburger.addEventListener("click", () => {
  if (sidebar.style.display === "none") {
    sidebar.style.display = "flex";
  } else {
    sidebar.style.display = "none";
  }
});
