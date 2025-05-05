export default class State { 
    constructor() {
        if (State.instance) { // singleton pattern
            return State.instance
        }

        //actual constructor logic
        this.money = 30;
        document.getElementById("money").innerText = this.money;
        
        //return new instance (only called once)
        State.instance = this;
        return this;
    }

    updateBalance(amount) {
        if (this.money + amount < 0) {return false}
        this.money += amount;
        document.getElementById("money").innerText = this.money;
        return true;
    }
}