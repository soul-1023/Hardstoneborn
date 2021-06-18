import Card from './Models/Card'

class Library {
    private _library : Card[];

    getCards(count: number) {
        let cards = []

        for(let i = 0; i < count; i++) {
            cards.push(
                this._library.pop()
            )
        }

        return cards
    }

    set Library(value) {
        this._library = [...value]
    }
}

export default Library;