const rollDice = require('./rollDice.js')
const weapons = require('./weapons.js')


const championValues = {}
const sword = weapons.swords[rollDice(10)]
const shield = weapons.shields[rollDice(10)]

const championSet = () => {
    championValues.name = localStorage.getItem('name')
    championValues.title = localStorage.getItem('title')
    championValues.heritage = localStorage.getItem('heritage')
    championValues.mode = localStorage.getItem('mode')
    championValues.monsterTrack = rollDice(3)
    championValues.storyPoint = 0
    championValues.swordChosen = sword
    championValues.shieldChosen = shield
    championValues.hp = 30
}

module.exports = {championValues, championSet}