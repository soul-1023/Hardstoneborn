import Character from "./Character";
import Card from "./Card";

class AI extends Character {
    Think() : Card {
        let rnd = Math.floor( Math.random() * (this.Hand.length + 1) )

        return this.Hand[rnd]
    }
}