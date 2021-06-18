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

function Sew(state, behavior) {
    let card = new Card(state)

    card.Actions = [...behavior]

    return card
}

Sew(card, CardBehavior[card.name].behaviors)