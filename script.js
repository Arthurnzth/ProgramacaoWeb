const button = document.getElementById("toggle-theme");
const body = document.body;

if (localStorage.getItem("theme") === "light") {
    body.classList.add("light-theme");
    button.textContent = "🌙 Mudar Tema";
}

button.addEventListener("click", () => {
    body.classList.toggle("light-theme")

    if (body.classList.contains("light-theme")) {
        button.textContent = "🌙 Mudar Tema";
        localStorage.setItem("theme", "light");
    }
    else {
        button.textContent = "☀️ Mudar Tema";
        localStorage.setItem("theme", "dark");
    }
});