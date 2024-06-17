let moon = document.getElementById("moon");

function ChangeTheme() {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    moon.src = "sun.png";
  } else {
    moon.src = "moon.png";
  }
}
