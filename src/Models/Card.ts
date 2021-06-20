import Character from "./Character";

class Card {
    state: {
        name: string,
        mana: number,
        type: string,
        text: string
    }

    private _action : (character: Character) => void

    run(character: Character) : void {
        this._action(character)
    }

    constructor(
        state : {
            name: string, 
            mana: number,
            type: string,
            text : string
        },
        action: (character: Character) => void
    ) {
        this.state = {...state}
        this._action = action
    }

    clone() {
        return new Card(this.state, this._action)
    }
}

export default Card; 
