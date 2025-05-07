import config from "../config.js"
import Plant from "../Plant.js"
import State from "../state.js"

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
        const seedPrice = config.seeds.find(seed => seed.name == seedType).price;
        if (cell.dataset.occupied == "false" && new State().money >= seedPrice) {
            new Plant(cell, seedType) // creates it on the field
        }
    });
})