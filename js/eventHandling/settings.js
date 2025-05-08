function showToast(message) {
    Toastify({
        text: message,
        duration: 2000,
        close: true
    }).showToast()
}

document.getElementById("toggleAnimations").addEventListener("click", () => {
    const logo = document.getElementById("farm")
    if (logo.classList.contains("spin")) {
        logo.classList.remove("spin")
        localStorage.setItem("disabledAnimation", "true")
        showToast("Logo animation was disabled")
    } else {
        logo.classList.add("spin")
        localStorage.removeItem("disabledAnimation")
        showToast("Logo animation was enabled")
    }
})

document.getElementById("save-name").addEventListener("click", () => {
    const nameInput = document.getElementById("name")
    const name = nameInput.value
    if (name !== "") { // validation
        nameInput.value = ""
        document.getElementById("name-tag").innerText = ", " + name
        localStorage.setItem("name", name)
        showToast("Name was set")
    } else {
        showToast("Name cannot be empty")
    }
})

document.getElementById("reset-name").addEventListener("click", () => {
    localStorage.removeItem("name")
    document.getElementById("name-tag").innerText = ""
    showToast("Name was reset")
})