const rollDice = require('./rollDice.js')


const championValues = {}

const championSet = () => {
    championValues.name = localStorage.getItem('name')
    championValues.title = localStorage.getItem('title')
    championValues.heritage = localStorage.getItem('heritage')
    championValues.mode = localStorage.getItem('mode')
    championValues.monsterTrack = rollDice(3)
    championValues.storyPoint = 0
}

module.exports = {championValues, championSet}