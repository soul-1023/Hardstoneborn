import Card from "./Card";
import {TypeCard} from "./TypeCard";

const CardBehavior = {
    "Opt": {
        behaviors: [
            () => {

            }
        ]
    }
}

let card = {
    name: 'Opt',
    mana: 2,
    type: TypeCard.Arcane,

}

function Sew(card, behavior) {
    return {
        ...card,
        ...behavior
    }
}

Sew(card, CardBehavior[card.name].behaviors)