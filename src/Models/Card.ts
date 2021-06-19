
class Card {
    state: {
        name: string,
        mana: number,
        type: string,
        text: string
    };
    Actions : Array<(state) => void> = []

    produce() : void {
        this.Actions.forEach(cb => cb(this.state))
    }

    constructor(state) {
        this.state = {...state}
    }
}

export default Card;
