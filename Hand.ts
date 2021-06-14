import Card from './Card'

class Hand {
    private _cards: Card[]
    private _effects: Array<() => void>

    constructor(hand = []) {
        this._effects = []
        this._cards = hand
    }

    get Effects() {
        return this._effects
    }

    addEffect(effect: () => void) {
        this._effects.push(effect)
    }

    get Cards() {
        return this._cards
    }

    set Cards(cards) {
        cards.forEach(card => this._cards.push(card))
    }

    deleteCard(index : number) {
        this._cards.splice(index, 1)
    }
}

export default Hand;