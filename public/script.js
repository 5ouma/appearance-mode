setInterval(() => {
  const text = document.getElementsByTagName("h1")[0];
  if (globalThis.matchMedia("(prefers-color-scheme: light)").matches === true) {
    text.textContent = "Light Mode";
  } else if (
    globalThis.matchMedia("(prefers-color-scheme: dark)").matches === true
  ) {
    text.textContent = "Dark Mode";
  } else {
    text.textContent = "No Pref";
  }
}, 300);
