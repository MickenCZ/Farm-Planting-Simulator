class State { // singleton pattern
    constructor() {
        if (State.instace) {
            return State.instace
        }
        //actual constructor logic
        this.money = 0;
        this.moneyTag = document.getElementById("money");
        //return new instance (only called once)
        State.instance = this;
        return this;
    }

    updateBalance(amount) {
        if (this.money + amount < 0) {return false}
        this.money += amount;
        this.moneyTag.innerText = amount;
        return true;
    }
}

//maybe a class with observer pattern, singleton class 

export default State