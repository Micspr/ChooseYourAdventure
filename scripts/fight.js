const champion = require('./champion.js')
const buttons = require('./buttons.js')
const monsters = require('./monster.js')

const fightText = () => {
    let result = `<p>The ${monsters.monsters[0].name} drops the sack its carrying in surprise at your mass hurtling towards it.<br> 
        The ${monsters.monsters[0].name} raises it's fists as you let out a great bellow and smack it with your hatchet.<br>`
    while(monsters.monsters[0].hp > 0) {
        result += `The ${monsters.monsters[0].name} takes ${champion.championValues.strength} damage.<br>`
        monsters.monsters[0].hp = monsters.monsters[0].hp - champion.championValues.strength
        if(monsters.monsters[0].hp > 0) {
            result += `The ${monsters.monsters[0].name} swings back, dealing ${monsters.monsters[0].strength} damage.<br> You ready another meaty swing.<br>`
            champion.championValues.hp = champion.championValues.hp - monsters.monsters[0].strength
            monsters.updateMonsterStrength(0)
        }
    }
        result += `The ${monsters.monsters[0].name} drops to the ground from your assault, defeated. You begin looting it like a "proper adventurer".`
        return result
}

let won = 0;

const fightTwoText = () => {
    let dragonText = `<p> You chase Proximo's shadow into his lair, fueled by adrenaline and delusions of grandeur.<br>
        Proximo lands with his back to you, signs of fresh food and ash smattered across his scales. He hasn't noticed your presence.<br><br>
        Not that you care.<br>
        "Proximo, I have come for your head!"<br>
        Proximo chuckles as he slowly turns towards you, lips curled ready to begin an evil villain monologue...<br>
        You promptly slap him upside the head with a mighty blow, dealing 10 damage. Nobody has time for monologues.<br>`
    while(monsters.monsters[1].hp > 0 && champion.championValues.hp > 0) {
        dragonText += `You prepare another fierce blow, landing with a resounding thwack against Proximo's thick hide and dealing ${champion.championValues.strength} damage.<br>`
        monsters.monsters[1].hp = monsters.monsters[1].hp - champion.championValues.strength
        if(monsters.monsters[1].hp > 0) {
            dragonText += `Proximo retaliates with a three-clawed strike dealing ${monsters.monsters[1].strength} damage.<br>`
            champion.championValues.hp = champion.championValues.hp - (monsters.monsters[1].strength - champion.championValues.damageReduction)
            monsters.updateMonsterStrength(1)
        }
        if(champion.championValues.hp <= 0) {
            won = 11
        }
        if(monsters.monsters[1].hp <= 0) {
            won = 12
        }
    }
        dragonText += `<br>The battle is now over...</p>`
        //buttons.updateButton()
        buttons.storyButtonInputs.push(`<button type='button' id='${won}' class='contButton'>Continue</button>`)
        return dragonText
}

module.exports = {fightText, fightTwoText};