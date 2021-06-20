import Card from "./Models/Card"
import Character from "./Models/Character"

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

    "Grapeshot": (character: Character) => {
        
    },

    "Manamorphose": (character: Character) => {

    },

    "Serum Visions": (character: Character) => {

    },

    "Silundi Vision": (character: Character) => {

    },

    "Lightning Bolt": (character: Character) => {

    },

    "Sleight of Hand": (character: Character) => {

    }
}