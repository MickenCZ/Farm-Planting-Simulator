import Plant from "./Plant.js";

export default class State { 
    constructor() {
        if (State.instance) { // singleton pattern
            return State.instance
        }

        //actual constructor logic
        this.money = 30;
        this.cropsPlanted = 0;
        this.totalMoneyMade = 0;
        document.getElementById("money").innerText = this.money;
        document.getElementById("cropsPlanted").innerText = this.cropsPlanted;
        document.getElementById("totalMoneyMade").innerText = this.totalMoneyMade;
        this.plants = []

        //return new instance (only called once)
        State.instance = this;
        return this;
    }

    updateBalance(amount) {
        if (amount > 0) {this.totalMoneyMade += amount}
        this.money += amount;
        document.getElementById("money").innerText = this.money;
        document.getElementById("totalMoneyMade").innerText = this.totalMoneyMade;
    }

    incrementPlantedCount() {
        this.cropsPlanted++;
        document.getElementById("cropsPlanted").innerText = this.cropsPlanted;
    }

    toJson() {
        return {
            money: this.money,
            cropsPlanted: this.cropsPlanted,
            totalMoneyMade: this.totalMoneyMade,
            plants: this.plants.map(plant => plant.toJson())
        }
    }

    fromJson(obj) {
        this.money = obj.money;
        this.cropsPlanted = obj.cropsPlanted;
        this.totalMoneyMade = obj.totalMoneyMade;
        document.getElementById("money").innerText = this.money;
        document.getElementById("cropsPlanted").innerText = this.cropsPlanted;
        document.getElementById("totalMoneyMade").innerText = this.totalMoneyMade;
        obj.plants.forEach( plant => {
            //json in localstorage stores id of cell, not the tag, so we have to find it. (find = filter[0])
            const cell = Array.from(document.querySelectorAll(".cell")).find(tag => tag.dataset.id == plant.cellId)

            this.plants.push(new Plant(cell, plant.seedType, plant.growth))
        })
    }

    addNewPlant(plant) {
        this.plants.push(plant)
    }

    removePlant(passedPlant) {
        this.plants = this.plants.filter(plant => plant != passedPlant)
    }
}