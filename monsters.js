const rollDice = requires('./math.js')
const monsters = [{name: 'Brutalus', hp: 20, strength: rollDice(8), ability: {devour: creatureInput.hp += 5}, storyPath: 0},
//Schism Hydra
{name: 'Proximo', hp: 35, strength: rollDice(8), ability: {Breath: rollDice(3)*5}, storyPath: 1},
// Chromatic Dragon
{name: 'Xyligtl', hp: 50, strength: rollDice(4), ability: {Consume:/*Select Loss Event*/'woops'}, storyPath: 2}]
//Chaos Spawn
const theWhiteRaven = {name: 'White Raven', hp: Infinity, strength: rollDice(40)*20}

module.exports = monsters, theWhiteRaven;