const monster = require('./monster.js')
const rollDice = require('./rollDice.js')


const championValues = {}

let creatureInput = monster.monsters[rollDice(3)]

const championSet = () => {
    championValues = {
        'name' : localStorage.getItem('name') || "", 
        'title' : localStorage.getItem('title') || "", 
        'heritage' : localStorage.getItem('heritage') || "", 
        'mode' : localStorage.getItem('mode') || "",
        'monster' : creatureInput,
        'storyPoint': 0
    }
}

module.exports = {championValues, championSet}