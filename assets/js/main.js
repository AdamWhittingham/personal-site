let theme = 'dark';

function setDark(){
  document.body.classList.add("dark");
  document.body.classList.remove("light");
  theme = 'dark';
}

function setLight(){
  document.body.classList.add("light");
  document.body.classList.remove("dark");
  theme = 'light';
}

function initThemeToggle() {
  const toggleButton = document.querySelector(".theme-toggle");
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const savedTheme = localStorage.getItem("preferredTheme");

  if (savedTheme){
    (savedTheme == "dark") ? setDark() : setLight();
  } else if (prefersDarkScheme) {
    setDark();
  } else {
    setLight();
  }

  toggleButton.addEventListener("click", function() {
    if (theme == 'dark') {
      setLight();
    } else {
      setDark();
    }
    localStorage.setItem("preferredTheme", theme);
  });
}

document.addEventListener('DOMContentLoaded', function(){
  initThemeToggle();
});
