import Plant from "./Plant.js"

// save seed data on dragging
document.querySelectorAll(".seed").forEach(seed => {
    seed.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("seedType", seed.dataset.seedType)
    })
})

document.querySelectorAll(".cell").forEach(cell => {
    cell.addEventListener("dragover", (e) => {e.preventDefault()}) // enable dropping on empty plots

    cell.addEventListener("drop", (e) => {
        const seedType = e.dataTransfer.getData("seedType")
        if (cell.dataset.occupied == "false") {
            new Plant(cell, seedType) // creates it on the field
        }
    });
})