const rollDice = require('./rollDice.js')

const swords = [
    {name: 'Steel Sword', strength: (rollDice(4)+1)*2}, 
    {name: 'Steel Sword', strength: (rollDice(4)+1)*2}, 
    {name: 'Steel Sword', strength: (rollDice(4)+1)*2},
    {name: `Enchanted Sword of Monster Slaying +2`, strength: (rollDice(4)+1)*2+2},
    {name: `Enchanted Sword of Monster Slaying +3`, strength: (rollDice(4)+1)*2+3},
    {name: `Enchanted Sword of Monster Slaying +4`, strength: (rollDice(4)+1)*2+4},
    {name: `Goldrin's Claymore`, strength: (rollDice(8)+1)*2+5},
    {name: `Goldrin's Claymore`, strength: (rollDice(8)+1)*2+6},
    {name: `Goldrin's Claymore`, strength: (rollDice(8)+1)*2+7},
    {name: `Goldrin's Claymore`, strength: (rollDice(8)+1)*2+8}
]

const shields = [
    {name: 'Steel Shield', damageReduction: (rollDice(4)+1)},
    {name: 'Steel Shield', damageReduction: (rollDice(4)+1)},
    {name: 'Steel Shield', damageReduction: (rollDice(4)+1)},
    {name: 'Enchant Shield of Safeguard +2', damageReduction: (rollDice(4)+3)},
    {name: 'Enchant Shield of Safeguard +3', damageReduction: (rollDice(4)+4)},
    {name: 'Enchant Shield of Safeguard +4', damageReduction: (rollDice(4)+5)},
    {name: `Mars' Protectorate`, damageReduction: (rollDice(8)+6)},
    {name: `Mars' Protectorate`, damageReduction: (rollDice(8)+6)},
    {name: `Mars' Protectorate`, damageReduction: (rollDice(8)+6)},
    {name: `Mars' Protectorate`, damageReduction: (rollDice(8)+6)},
]

module.exports = {swords, shields};