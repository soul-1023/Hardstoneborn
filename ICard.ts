interface ICard {
    state: {
        name: string,
        mana: number,
        type: string,
        text: string
    },
    Actions : Array<(states) => void>
}

export type {ICard};