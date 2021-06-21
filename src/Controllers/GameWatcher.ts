import Character from "../Models/Character"


class GameWatcher {
    IsEndGame(characters: Array<Character>) : boolean {
        if( characters.find(c => c.HealthPoint < 1) != undefined) {
            return true
        } else if( characters.find(c => c.Library.Cards.length < 1) != undefined) {
            return true
        }

        return false
    }

    IsEndTurn(characters: Array<Character>) : boolean {
        if( characters.find(c => c.Mana < 1) != undefined ) {
            return true
        }

        return false
    }
}