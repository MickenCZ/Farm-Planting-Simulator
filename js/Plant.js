import makegrowthSvg from "./growthmeter.js"
import State from "./State.js"
import config from "./config.js"

export default class Plant {
    constructor(cell, seedType, isFromSave = false, growth = 0) { // we need option to initialise with non0 growth for loading saves
        this.state = new State() 
        this.growth = growth
        this.cell = cell
        this.seed = config.seeds.find(seed => seed.name === seedType)
        const {svg, fg} = makegrowthSvg()
        this.svg = svg
        this.fg = fg
        if (!isFromSave) {
            this.createCropNormal()
        } else {
            this.createCropFromSave()
        }
        this.growPlant()

        new State().addNewPlant(this)
    }


    createCropNormal() {// creating the actual image and circle
        if (this.seed.price > this.state.money) {return}
        this.cell.dataset.occupied = "true";

        const img = document.createElement("img")
        img.src = `images/${this.seed.name}.png`
        img.alt = this.seed.name
        this.cell.appendChild(img)

        // append this.growth circle
        this.cell.appendChild(this.svg);

        this.state.updateBalance(-this.seed.price)
        this.state.incrementPlantedCount()
        
    }

    createCropFromSave() {// just ui, everything else is loaded
        this.cell.dataset.occupied = "true";

        const img = document.createElement("img")
        img.src = `images/${this.seed.name}.png`
        img.alt = this.seed.name
        this.cell.appendChild(img)

        // append this.growth circle
        this.cell.appendChild(this.svg);
    }


    growPlant() { // animating the circle, calling harvest when finished and clicked
        const circleRadius = 26; // found in growthmeter.js svg
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
                    
                }, {once: true}); // will delete itself after clicking once, fantastic option
        }}, this.seed.growthTickTime);
    }

    toJson() {
        return {
            cellId: this.cell.dataset.id, //it doesnt store the thml tag but the id, careful
            seedType: this.seed.name,
            growth: this.growth
        }
    }
}