const rollDice = require('./rollDice.js')

const monsters = [
    {name: 'Kobold', hp: 3, strength: rollDice(3)+1},
    {name: 'Proximo', hp: 35, strength: rollDice(8)+1, breath: (rollDice((10)+1)*2)}
];

const updateMonsterStrength = (num) => {
    if(num === 0) {
        monsters[0].strength = rollDice(3)+1
    }
    if(num === 1) {
        monsters[1].strength = rollDice(8)+1
    }
}

module.exports = {monsters, updateMonsterStrength};