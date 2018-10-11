const rollDice = require('./rollDice.js')


// const monsters = [
//     {name: 'Brutalus', hp: 20, strength: rollDice(8), ability: 'devour' /*{devour: creatureInput.hp += 5}*/, storyPath: 0},
//     //Schism Hydra
//     {name: 'Proximo', hp: 35, strength: rollDice(8), ability: {Breath: rollDice(3)*5}, storyPath: 1},
//     // Chromatic Dragon
//     {name: 'Xyligtl', hp: 50, strength: rollDice(4), ability: {Consume:/*Select Loss Event*/'woops'}, storyPath: 2},
//     //Chaos Spawn
//     {name: 'White Raven', hp: Infinity, strength: rollDice(40)*20},
//     {name: 'Slime', hp: 3, strength: rollDice(2)+1}, 
//     {name: 'Kobold', hp: 3, strength: rollDice(3)+1}, 
//     {name: 'Fleshling', hp: 3, strength: rollDice(2)+1}]

// module.exports = monsters;

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