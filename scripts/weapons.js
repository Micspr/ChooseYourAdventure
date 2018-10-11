const rollDice = require('./rollDice.js')

const swords = [
    {name: 'the Steel Sword', strength: (rollDice(4)+1)*2, string: 'The unimpressive steel sword is an upgrade over your previous hatchet, but clearly not worth the effort to save it.'}, 
    {name: 'the Steel Sword', strength: (rollDice(4)+1)*2, string: 'The unimpressive steel sword is an upgrade over your previous hatchet, but clearly not worth the effort to save it.'}, 
    {name: 'the Steel Sword', strength: (rollDice(4)+1)*2, string: 'The unimpressive steel sword is an upgrade over your previous hatchet, but clearly not worth the effort to save it.'},
    {name: `the Enchanted Sword of Monster Slaying +2`, strength: (rollDice(4)+1)*2+2, string: 'The mild Monster Slaying Enchantment provides a mild bonus over your previous weapon'},
    {name: `the Enchanted Sword of Monster Slaying +3`, strength: (rollDice(4)+1)*2+3, string: 'The Monster Slaying Enchantment provides a distinct bonus over your previous weapon.'},
    {name: `the Enchanted Sword of Monster Slaying +4`, strength: (rollDice(4)+1)*2+4, string: 'The impressive Monster Slaying Enchantment is a night and day increase over your old hatchet.'},
    {name: `Goldrin's Claymore`, strength: (rollDice(8)+1)*2+5, string: `Goldrin's Claymore! Where the kobold managed to find it is a mystery, but clearly your quest is fated for glory.`},
    {name: `Goldrin's Claymore`, strength: (rollDice(8)+1)*2+6, string: `Goldrin's Claymore! Where the kobold managed to find it is a mystery, but clearly your quest is fated for glory.`},
    {name: `Goldrin's Claymore`, strength: (rollDice(8)+1)*2+7, string: `Goldrin's Claymore! Where the kobold managed to find it is a mystery, but clearly your quest is fated for glory.`},
    {name: `Goldrin's Claymore`, strength: (rollDice(8)+1)*2+8, string: `Goldrin's Claymore! Where the kobold managed to find it is a mystery, but clearly your quest is fated for glory.<br>
            There's an engraving on the pommel showing a beheaded dragon.`}
]

const shields = [
    {name: 'Steel Shield', damageReduction: (rollDice(4)+1), string: 'The unimpressive steel shield is better than nothing.'},
    {name: 'Steel Shield', damageReduction: (rollDice(4)+1), string: 'The unimpressive steel shield is better than nothing.'},
    {name: 'Steel Shield', damageReduction: (rollDice(4)+1), string: 'The unimpressive steel shield is better than nothing.'},
    {name: 'Enchant Shield of Safeguard +2', damageReduction: (rollDice(4)+3), string: `You think you can feel the Safeguard effect kick in as you lift the shield.`},
    {name: 'Enchant Shield of Safeguard +3', damageReduction: (rollDice(4)+4), string: `You can feel the Safeguard effect kick in as you lift the shield.`},
    {name: 'Enchant Shield of Safeguard +4', damageReduction: (rollDice(4)+5), string: `The Safeguard effect washes over you. Maybe you won't even feel the dragon's attacks!`},
    {name: `Mars' Protectorate`, damageReduction: (rollDice(4)+6), string: `You're flooded with a strong sense of permanence as the shield turns a bright shade of red to your touch. What is this?`},
    {name: `Mars' Protectorate`, damageReduction: (rollDice(4)+7), string: `You're flooded with a strong sense of permanence as the shield turns a bright shade of red to your touch. What is this?`},
    {name: `Mars' Protectorate`, damageReduction: (rollDice(4)+8), string: `You're flooded with a strong sense of permanence as the shield turns a bright shade of red to your touch. What is this?`},
    {name: `Mars' Protectorate`, damageReduction: (rollDice(4)+9), string: `You feel immortal. An inscription on the shield reads, "Mars' Protectorate"`},
]

module.exports = {swords, shields};