import Hand from "../Hand";
import Library from "../Library";
import CardActions from "../Controllers/CardActions";
import Card from "./Card";
import Battlefield from "./Battlefield";


class Character {
    private _hand : Hand
    private _library : Library
    private _battlefield : Battlefield
    Actions : CardActions
    private _healthPoint : number
    private _mana : number

    constructor() {
        this._healthPoint = 20
        this._mana = 0
        this._hand = new Hand()
        this._library = new Library()
        this.Actions = new CardActions()
    }

    TakeCard(count: number) : void {
        this._hand.Cards = this._library.getCards(count)
    }

    SpendCard(cardName : string) : boolean {
        let card : Card | undefined = this._hand.Cards.find(c => c.state.name == cardName)

        if(card != undefined) {
            let indexCard : number = this._hand.Cards.indexOf(card)

            this._hand.deleteCard(indexCard)
            this._battlefield.addCard(card)

            return true
        }

        return false
    }

    get Hand() {
        return this._hand.Cards
    }

    get HealthPoint() {
        return this._healthPoint
    }

    ReduceHealth(damage : number) {
        this._healthPoint -= damage
    }

    get Mana() {
        return this._mana
    }

    set Mana(value : number) {
        this._mana += value
    }
}

export default Character;
