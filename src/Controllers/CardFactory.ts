import Card from '../Models/Card'
import Character from '../Models/Character';

class CardFactory {
    Sew(
        state : {
            name: string, 
            mana: number,
            type: string,
            text : string
        }, 
        behavior: (character: Character) => void
    ) : Card {
        return new Card(state, behavior)
    }
}