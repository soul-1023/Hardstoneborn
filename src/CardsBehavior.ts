import Card from "./Models/Card"
import Character from "./Models/Character"
import { TypeCard } from "./Models/TypeCard"

const CardsBehavior = {
    "Opt": (character: Character) => {
        character.TakeCard(1)
    }, 

    "Electric Mantle": (character: Character) => {
        character.Hand.addEffect("Electric Mantle", () => {
            character.Hand.Cards.map(card => {
                card.state.mana--

                return card
            })

            return () => {
                character.Hand.Cards.map(card => {
                    card.state.mana++
    
                    return card
                })
            }
        })
    },

    "Desperate Ritual": (character: Character) => {
        character.addMana(3)
    },

    "Gifts Ungiven": (character: Character) => {
        let topCards : Array<Card> = character.Library.getCards(4)
        const rnd = () => Math.floor( Math.random() * (topCards.length + 1) )
        let selectedCards : Set<Card> = new Set()

        while(selectedCards.size != 2) {
            selectedCards.add( topCards[rnd()] )
        }

        Array.from(selectedCards).forEach(card => {
            character.Hand.Cards.push(card)
            character.Library.Cards.unshift(
                ...topCards.filter(c => c.state.name !== card.state.name)
            )
        })
    },

    "Grapeshot": (character: Character, numOfCardsPlayed: number) => {
        
    },

    "Manamorphose": (character: Character) => {
        character.addMana(2)
        character.TakeCard(1)
    },

    "Serum Visions": (character: Character) => {
        character.TakeCard(1)
        character.putItDown(2)
    },

    "Silundi Vision": (character: Character) => {
        let topCards: Array<Card> = character.Library.getCards(6)
        let sorcery = topCards.find(c => c.state.type == TypeCard.Sorcery)
        topCards = topCards.filter(c => c.state.name !== sorcery.state.
            name)

        if(sorcery !== undefined) {
            character.Hand.Cards.push(sorcery)
            character.Library.Cards.unshift(...topCards)
        }
    },

    "Lightning Bolt": (character: Character) => {
        character.ReduceHealth(3)
    },

    "Sleight of Hand": (character: Character) => {

    }
}