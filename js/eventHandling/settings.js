document.getElementById("toggleAnimations").addEventListener("click", () => {
    const logo = document.getElementById("farm")
    if (logo.classList.contains("spin")) {
        logo.classList.remove("spin")
        localStorage.setItem("disabledAnimation", "true")
    } else {
        logo.classList.add("spin")
        localStorage.removeItem("disabledAnimation")
    }
})

