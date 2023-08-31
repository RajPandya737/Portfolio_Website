document.addEventListener("DOMContentLoaded", function () {
  let modeToggle = document.getElementById("btn");
  modeToggle.onclick = function () {
    document.body.classList.toggle("dark-theme");
    document.body.style.transition = "0.5s";
  };
});
