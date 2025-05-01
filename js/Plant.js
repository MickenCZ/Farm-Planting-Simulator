import makeGrowthSvg from "./growthmeter.js"

export default class Plant {
    constructor(cell, seedType) { 
        this.cell = cell
        this.seedType = seedType
        const {svg, fg} = makeGrowthSvg()
        this.svg = svg
        this.fg = fg
        this.createCrop()
    }

    createCrop() {// creating the actual image and circle
        this.cell.dataset.occupied = "true";

        const img = document.createElement("img")
        img.src = `images/${this.seedType}.png`
        this.cell.appendChild(img)

        // append growth circle
        this.cell.appendChild(this.svg);
    }

    growPlant(growthStageTime) { // animating the circle, calling harvest when finished and clicked
        const circleRadius = 26; // found in growthmeter.js svg
        let growth = 0;
        const grow = setInterval(() => {
            growth += 5;
            const max = 2 * Math.PI * circleRadius;
            this.fg.setAttribute("stroke-dashoffset", max * (1 - growth / 100));

            if (growth >= 100) {
                clearInterval(grow);
                this.cell.classList.add("grown")
            
                this.cell.addEventListener("click", () => {
                    this.cell.innerHTML = ''; 
                    this.cell.dataset.occupied = "false";
                    this.cell.classList.remove("grown")
                    this.harvest()
                });
        }}, growthStageTime);
    }

    harvest() {
        console.log("asd")
    }
}