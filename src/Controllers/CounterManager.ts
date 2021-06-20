import Card from "../Models/Card";


class CounterOfPlayedCards {
    playedCards : number

    constructor() {
        this.playedCards = 0
    }

    trackIt() : void {
        this.playedCards++
    }

    clear() : void {
        this.playedCards = 0
    }
}

export default CounterOfPlayedCards;