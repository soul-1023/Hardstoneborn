import {ICard} from './ICard'
import Card from './Card'

class CardFactory {
    Sew(
        states = {}, 
        behavior : Array<(states) => void> = []
    ) : ICard {
        return new Card(states, behavior);
    }
}