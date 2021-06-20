import Hand from "./Hand";
import Library from "./Library";
import Card from "./Card";
import Battlefield from "./Battlefield";

// Я специально сделал Character фасадом
// поскольку время на написание слишком короткое
// в перспективе, его нужно разбить на нужное количество модулей
// и скорее всего, управление рукой и библиотекой, должны осуществляться
// через посредник, а не через Character
class Character {
    private _name : string
    private _hand : Hand
    private _library : Library
    private _battlefield : Battlefield
    private _healthPoint : number
    private _mana : number

    constructor(name: string) {
        this._name = name
        this._healthPoint = 20
        this._mana = 0
        this._hand = new Hand()
        this._library = new Library()
    }

    TakeCard(count: number) : void {
        this._hand.Cards = this._library.getCards(count)
    }

    SpendCard(cardName : string) : boolean {
        let card : Card | undefined = this._hand.Cards.find(c => c.state.name == cardName)

        if(card != undefined) {
            this._hand.deleteCard(card.state.name)
            this._battlefield.addCard(card)

            return true
        }

        return false
    }

    get Name() {
        return this._name;
    }

    get Hand() {
        return this._hand
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

    addMana(count : number) {
        this._mana += count
    }

    get Library() {
        return this._library
    }

    set Library(cards) {
        this._library.Cards = cards
    }
}

export default Character;
