import config from "./config.js"
import State from "./state.js"

const {seeds} = config

const seedsContainer = document.getElementById("seeds")
const gameGrid = document.getElementById("game-grid")

const seedsHTML = seeds.map(seed => {
    return `<div class="seedWrapper">
        <span>${s(seed.name)}</span>
        <span>${s(seed.price)}$</span>
        <img src=${s(seed.image)} draggable="true" class="seed" data-seed-type="${s(seed.name)}">
    </div>`
})

function s(str) {
    // source: https://css-tricks.com/snippets/javascript/htmlentities-for-javascript/
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

//load seeds
seedsContainer.innerHTML = seedsHTML.join("")

//load farmland
for (let i = 0; i < 49; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.occupied = "false";
    cell.dataset.id = i;
    gameGrid.appendChild(cell);
}

//load default state
const saveGame = localStorage.getItem("save")
if (saveGame == null) {
    new State()
} else {
    new State().fromJson(JSON.parse(saveGame))
}
