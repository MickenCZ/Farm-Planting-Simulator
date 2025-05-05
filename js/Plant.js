import makegrowthSvg from "./growthmeter.js"
import State from "./state.js"
import config from "./config.js"

export default class Plant {
    constructor(cell, seedType) {
        this.state = new State() 
        this.cell = cell
        this.seed = config.seeds.find(seed => seed.name === seedType)
        const {svg, fg} = makegrowthSvg()
        this.svg = svg
        this.fg = fg
        this.createCrop()
        this.state.incrementPlantedCount()
        this.growPlant()

        new State().addNewPlant(this)
    }

    createCrop() {// creating the actual image and circle
        if (this.seed.price > this.state.money) {return}
        this.cell.dataset.occupied = "true";

        const img = document.createElement("img")
        img.src = `images/${this.seed.name}.png`
        this.cell.appendChild(img)

        // append this.growth circle
        this.cell.appendChild(this.svg);

        this.state.updateBalance(-this.seed.price)
    }

    growPlant() { // animating the circle, calling harvest when finished and clicked
        const circleRadius = 26; // found in growthmeter.js svg
        this.growth = 0;
        const grow = setInterval(() => {
            this.growth += 5;
            const max = 2 * Math.PI * circleRadius;
            this.fg.setAttribute("stroke-dashoffset", max * (1 - this.growth / 100));

            if (this.growth >= 100) {
                clearInterval(grow);
                this.cell.classList.add("grown")
            
                this.cell.addEventListener("click", () => {
                    this.cell.innerHTML = ''; 
                    this.cell.dataset.occupied = "false";
                    this.cell.classList.remove("grown")
                    this.state.updateBalance(Math.round(this.seed.price * this.seed.margin))
                    new State().removePlant(this)
                    
                }, {once: true});
        }}, this.seed.growthTickTime);
    }

    toJson() {
        this.cellId = this.cell.dataset.id,
        this.seed = this.seed
    }
}