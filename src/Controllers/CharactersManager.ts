import Character from "../Models/Character"
import AI from '../Models/AI'

class CharactersManager {
    private _characters : Array<Character>

    constructor() {
        this._characters = []
    }
    
    get Characters() {
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
}

export default CharactersManager;