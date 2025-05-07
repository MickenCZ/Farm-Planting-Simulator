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

document.getElementById("save-name").addEventListener("click", () => {
    const nameInput = document.getElementById("name")
    const name = nameInput.value
    if (name !== "") { // validation
        nameInput.value = ""
        document.getElementById("name-tag").innerText = ", " + name
        localStorage.setItem("name", name)
    }
})

document.getElementById("reset-name").addEventListener("click", () => {
    localStorage.removeItem("name")
    document.getElementById("name-tag").innerText = ""
})