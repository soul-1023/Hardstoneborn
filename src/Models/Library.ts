import Card from './Card'

class Library {
    private _library : Array<Card>

    constructor() {
        this._library = []
    }

    getCards(count: number) {
        let cards = []

        for(let i = 0; i < count; i++) {
            cards.push(
                this._library.pop()
            )
        }

        return cards
    }

    set Cards(value) {
        this._library = [...value]
    }

    get Cards() {
        return this._library
    }
}

export default Library;