class State { // singleton pattern
    constructor() {
        if (State.instance) {
            return State.instance
        }
        //actual constructor logic
        this.money = 0;
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

//maybe a class with observer pattern, singleton class 

export default State