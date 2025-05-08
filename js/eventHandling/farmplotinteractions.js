import config from "../config.js"
import Plant from "../Plant.js"
import State from "../State.js"

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
        } else if (cell.dataset.occupied == "true") {
            Toastify({
                text: "The field cell is already occupied",
                duration: 1500,
                close: true
            }).showToast()
        } else {
            Toastify({
                text: "You don't have enough funds to plant this seed",
                duration: 2000,
                close: true
            }).showToast()
        }
    });
})