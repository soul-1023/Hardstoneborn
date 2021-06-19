import Card from './Models/Card'

class Battlefield {
    private _cards : Card[];

    get Battlefield() {
        return this._cards
    }

    addCard(card : Card) {
        this._cards.push(card)
    }

    get Count() {
        return this._cards.length
    }

    Clear() : void {
        this._cards = []
    }

}

export default Battlefield;