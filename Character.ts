import Hand from "./Hand";
import Library from "./Library";
import CardActions from "./CardActions";
import Card from "./Card";
import Battlefield from "./Battlefield";


class Character {
    private _hand : Hand
    private _library : Library
    private _battlefield : Battlefield
    Actions : CardActions

    constructor() {
        this._hand = new Hand()
        this._library = new Library()
        this.Actions = new CardActions()
    }

    TakeCard(count: number) : void {
        this._hand.Cards = this._library.getCards(count)
    }

    SpendCard(cardName : string) {
        let card : Card | undefined = this._hand.Cards.find(c => c.state.name == cardName)

        if(card != undefined) {
            let indexCard : number = this._hand.Cards.indexOf(card)

            this._hand.deleteCard(indexCard)
            this._battlefield.addCard(card)
        }
    }
}