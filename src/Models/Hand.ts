import Card from './Card'

class Hand {
    private _cards: Array<Card>
    private _effects: Array<{name: string, effect: () => void}>

    constructor(hand = []) {
        this._cards = hand
    }

    deleteCard(cardName: string) : void {
        this._cards = this._cards.filter(c => c.state.name !== cardName)
    }

    addEffect(name: string, effect: () => void) : void {
        this._effects.push({name, effect})
    }

    getCard(name: string) : Card {
        return this._cards.find(e => e.state.name == name)
    }

    get Effects() {
        return this._effects
    }

    get Cards() : Array<Card> {
        return this._cards
    }

    set Cards(cards: Array<Card>) {
        this._cards.push(...cards)
    }
}

export default Hand;