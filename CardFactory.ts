import {ICard} from './ICard'
import Card from './Card'

class CardFactory {
    Sew(
        states = {}, 
        behavior : Array<(states) => void> = []
    ) : ICard {
        let card : ICard = new Card()

        card.Actions = behavior.map(f => {
            return () => {
                states = {...states}
                return f(states)
            }
        })

        return card
    }
}