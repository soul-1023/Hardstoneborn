import {ICard} from './ICard';

class Card implements ICard {
    state: {
        name: string,
        mana: number,
        type: string,
        text: string
    } = {}
    Actions : Array<(states) => void> = []

    produce() : void {
        this.Actions.forEach(cb => cb(this.state))
    }

    constructor(states, behavior) {
        this.state = {...states}
        this.Actions = [...behavior]
    }
}

export default Card;
