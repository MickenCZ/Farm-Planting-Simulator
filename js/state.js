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

        //return new instance (only called once)
        State.instance = this;
        return this;
    }

    updateBalance(amount) {
        if (this.money + amount < 0) {return false}
        if (amount > 0) {this.totalMoneyMade += amount}
        this.money += amount;
        document.getElementById("money").innerText = this.money;
        document.getElementById("totalMoneyMade").innerText = this.totalMoneyMade;
        return true;
    }

    incrementPlantedCount() {
        this.cropsPlanted++;
        document.getElementById("cropsPlanted").innerText = this.cropsPlanted;
    }

    toJson() {
        const field = document.getElementById("game-grid")
        return {
            money: this.money,
            cropsPlanted: this.cropsPlanted,
            totalMoneyMade: this.totalMoneyMade,
            field: field.innerHTML
        }
    }
}