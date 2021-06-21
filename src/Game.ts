import Card from "./Models/Card"
import CharacterManager from "./Controllers/CharactersManager"
import CharactersManager from "./Controllers/CharactersManager"
import Character from "./Models/Character"


class Game {
    private characterManager : CharacterManager

    constructor() {
        this.characterManager = new CharactersManager()
    }

    initialization(cards: Array<Card>, playerName = 'Player'): void {
        this.characterManager.Characters.forEach(character => {
            this.fillLibrary(character, cards)
            this.distribute(cards, character)
        })

        this.characterManager.createPlayer(playerName)
        this.characterManager.createAI()
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

    private distribute(cards: Array<Card>, character: Character) : void {
        const COUNT_OF_DISTR_CARDS : number = 5
        character.TakeCard(COUNT_OF_DISTR_CARDS)
    }

    private fillLibrary(character: Character, cards: Array<Card>) {
        const COPIES_OF_CARDS: number = 4
        character.Library.Cards = this.shuffle(
            this.replicate(cards, COPIES_OF_CARDS)
        )
    }
}