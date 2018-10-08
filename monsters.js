const rollDice = requires('./math.js')
const monsters = [{name: 'Brutalus', hp: 20, strength: rollDice(8), ability: 'Devour'/*Regen 5 HP*/, storyPath: 0},
//Schism Hydra
{name: 'Proximo', hp: 35, strength: rollDice(8), ability: 'Breath'/*variable damage rollDice(3)^5*/, storyPath: 1},
// Chromatic Dragon
{name: 'Xyligtl', hp: 50, strength: rollDice(4), ability: 'Consume'/*Instant loss event*/, storyPath: 2}]
//Chaos Spawn
const theWhiteRaven = {name: 'White Raven', hp: Infinity, strength: rollDice(40)*20}

module.exports = monsters, theWhiteRaven;