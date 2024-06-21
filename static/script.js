setInterval(() => {
  if (globalThis.matchMedia("(prefers-color-scheme: light)").matches === true) {
    document.getElementsByTagName("h1")[0].textContent = "Light Mode";
  } else if (
    globalThis.matchMedia("(prefers-color-scheme: dark)").matches === true
  ) {
    document.getElementsByTagName("h1")[0].textContent = "Dark Mode";
  } else {
    document.getElementsByTagName("h1")[0].textContent = "No Pref";
  }
}, 300);
