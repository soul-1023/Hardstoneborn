import Card from './Card'

class Battlefield {
    Battlefield : Card[];

    get Count() {
        return this.Battlefield.length
    }

    private set Count(value) {
        this.Count = value
    }

    Clear() : void {
        this.Battlefield = []
    }

}