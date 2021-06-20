import Character from "./Character";
import Card from "./Card";

class AI extends Character {
    constructor(name: string) {
        super(name)
    }


    Think() : Card {
        let rnd = Math.floor( 
            Math.random() * (this.Hand.Cards.length + 1) 
        )

        return this.Hand[rnd]
    }
}

export default AI;