import Card from './Card'

class Hand {
    public hand: Card[]
    private _effects: Array<() => void>

    constructor(hand = []) {
        this._effects = []
        this.hand = hand
    }

    get Effects() {
        return this._effects
    }

    addEffect(effect: () => void) {
        this._effects.push(effect)
    }
}

export default Hand;