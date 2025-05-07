import State from "../state.js"

document.getElementById("save-game").addEventListener("click", () => {
    const state = new State().toJson()
    localStorage.setItem("save", JSON.stringify(state))
})

document.getElementById("download-save").addEventListener("click", () => {
    const state = new State().toJson()
    const jsonString = JSON.stringify(state, null, 2)
    const blob = new Blob([jsonString], {type: "application/json"})
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "save.json"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
})

document.getElementById("save-file").addEventListener("change", e => {
    const file = e.target.files[0]
    const reader = new FileReader()

    reader.onload = () => {
        localStorage.setItem("save", reader.result)
        location.reload() // will be loaded from localstorage on restart
    }

    reader.readAsText(file)
})