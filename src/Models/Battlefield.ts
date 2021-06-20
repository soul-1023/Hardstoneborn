import Card from './Card'

class Battlefield {
    private _cards : Card[];

    get Cards() {
        return this._cards
    }

    addCard(card : Card) : void {
        this._cards.push(card)
    }

    get Count() {
        return this._cards.length
    }

    Clear() : void {
        this._cards.length = 0
    }

}

export default Battlefield;