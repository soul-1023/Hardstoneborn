import Character from "../Models/Character"

class CharactersManager {
    private _characters : Array<Character>

    get Characters() {
        return this._characters
    }

    constructor() {
        this._characters.push(new AI())
    }
}