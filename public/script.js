const element = document.querySelector("h1");
const lightMode = globalThis.matchMedia("(prefers-color-scheme: light)");
const darkMode = globalThis.matchMedia("(prefers-color-scheme: dark)");
const updateText = (element, lightMode, darkMode) => {
  if (lightMode.matches === true) element.textContent = "Light Mode";
  else if (darkMode.matches === true) element.textContent = "Dark Mode";
  else element.textContent = "No Pref";
};

lightMode.addEventListener("change", () => {
  updateText(element, lightMode, darkMode);
});
updateText(element, lightMode, darkMode);
