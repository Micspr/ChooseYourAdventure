const monster = require('./monster.js')
const rollDice = require('./rollDice.js')


const championValues = {}

let creatureInput = monster.monsters[rollDice(3)].name

const championSet = () => {
    championValues.name = localStorage.getItem('name')
    championValues.title = localStorage.getItem('title')
    championValues.heritage = localStorage.getItem('heritage')
    championValues.mode = localStorage.getItem('mode')
    championValues.monsterTrack = creatureInput
    championValues.storyPoint = 0
}

module.exports = {championValues, championSet}