interface ICard {
    Name : string,
    Mana : number,
    Type : string,
    Text : string,
    Actions : Array<(states) => void>
}

export type {ICard};