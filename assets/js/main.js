const root = document.documentElement;
let theme = 'dark';

function setTheme(next) {
  theme = next;
  root.classList.toggle('dark', next === 'dark');
  root.classList.toggle('light', next === 'light');
}

// Runs in <head> so the right theme is in place before the first paint.
function initTheme() {
  const savedTheme = localStorage.getItem("preferredTheme");

  if (savedTheme == "dark" || savedTheme == "light") {
    setTheme(savedTheme);
  } else {
    const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    setTheme(prefersLight ? 'light' : 'dark');

    // Follow the OS until an explicit choice is made
    window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", function(event) {
      if (!localStorage.getItem("preferredTheme")) {
        setTheme(event.matches ? 'light' : 'dark');
        updateToggle();
      }
    });
  }
}

function updateToggle() {
  const toggleButton = document.querySelector(".theme-toggle");
  if (toggleButton) {
    toggleButton.setAttribute("aria-pressed", theme == 'light');
  }
}

function initThemeToggle() {
  const toggleButton = document.querySelector(".theme-toggle");
  if (!toggleButton) return;

  updateToggle();

  toggleButton.addEventListener("click", function() {
    setTheme(theme == 'dark' ? 'light' : 'dark');
    localStorage.setItem("preferredTheme", theme);
    updateToggle();
  });
}

initTheme();

document.addEventListener('DOMContentLoaded', function(){
  initThemeToggle();
});
