import fs from 'fs'

function readDB() : string {
    let data = fs.readFileSync('../db/cards.json', 'utf8')

    return data
}

export default readDB;