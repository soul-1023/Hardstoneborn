import {ICard} from './ICard';

class Card implements ICard {
    Name : string;
    Mana : number;
    Type : string;
    Text : string;
    Actions : Array<(states) => void> = [];

    produce(states) : void {
        this.Actions.forEach(cb => cb(states));
    }
}

export default Card;
