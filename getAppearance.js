setInterval(() => {
    if (window.matchMedia("(prefers-color-scheme: light)").matches === true) {
        document.getElementById("appearanceHed").textContent = "Light Mode";
    } else if (
        window.matchMedia("(prefers-color-scheme: dark)").matches === true
    ) {
        document.getElementById("appearanceHed").textContent = "Dark Mode";
    } else {
        document.getElementById("appearanceHed").textContent =
            "It doesn't get Appearance Mode";
    }
}, 300);
