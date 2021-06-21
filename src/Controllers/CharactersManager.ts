import Character from "../Models/Character"
import AI from '../Models/AI'

class CharactersManager {
    private _characters : Array<Character>

    constructor() {
        this._characters = []
    }

    get Characters() : Array<Character> {
        return this._characters
    }

    createPlayer(name: string): void {
        this._characters.push(new Character(
            name
        ))
    }

    createAI(name = "AI"): void {
        this._characters.push(new AI(
            name
        ))
    }

    getActive() : Character {
        const START_POSITION : number = 0

        return this._characters[START_POSITION]
    }

    mix() : void {
        this._characters = this._characters.sort(() => {
            return Math.random() > .5 ? 1 : -1
        })
    }
}

export default CharactersManager;