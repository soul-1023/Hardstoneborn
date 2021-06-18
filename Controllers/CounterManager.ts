import Character from "../Models/Character";


class CounterManager {
    AddMana(character: Character, count: number) {
        character.Mana += count
    }

    SpendMana(character: Character, count: number) {
        character.Mana -= count
    }

    Damage(character: Character, count: number) {
        character.ReduceHealth(count)
    }
}

export default CounterManager;