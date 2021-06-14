import Card from './Card'

class Battlefield {
    private _battlefield : Card[];

    get Battlefield() {
        return this._battlefield
    }

    get Count() {
        return this._battlefield.length
    }

    Clear() : void {
        this._battlefield = []
    }

}

export default Battlefield;