import Card from "./Models/Card"
import CharacterManager from "./Controllers/CharactersManager"
import CharactersManager from "./Controllers/CharactersManager"


class Game {
    private characterManager : CharacterManager

    constructor() {
        this.characterManager = new CharactersManager()
    }

    initialization(cards: Array<Card>): void {
        const COPIES_OF_CARDS: number = 4
        let replicatedCards = this.replicate(cards, COPIES_OF_CARDS)
        replicatedCards = this.shuffle(replicatedCards)

        // this.characterManager.Characters.
    }

    private shuffle(cards: Array<Card>) : Array<Card> {
        let newCards = [...cards]

        for(let i = cards.length - 1; i > 0; i--) {
            let j = Math.floor( Math.random() * (i + 1) );
            [newCards[i], newCards[j]] = [
                newCards[j], newCards[i]
            ];
        }

        return newCards
    }

    private replicate(cards: Array<Card>, count: number) : Array<Card> {
        return cards.reduce((acc: Array<Card>, card: Card) => {
            return acc.concat(
                [...Array(count)].map(_ => card.clone())
            )
        }, [])
    }
}