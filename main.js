let storySoFar = ""
const rollDice = (diceNum) => Math.floor(Math.random() * diceNum)

const monsters = [{name: 'Brutalus', hp: 20, strength: rollDice(8), ability: 'devour' /*{devour: creatureInput.hp += 5}*/, storyPath: 0},
//Schism Hydra
{name: 'Proximo', hp: 35, strength: rollDice(8), ability: {Breath: rollDice(3)*5}, storyPath: 1},
// Chromatic Dragon
{name: 'Xyligtl', hp: 50, strength: rollDice(4), ability: {Consume:/*Select Loss Event*/'woops'}, storyPath: 2}]
//Chaos Spawn

let creatureInput = monsters[rollDice(3)]

//const openingScript = `Gather and behold! The story of ${championName}, the ${championTitle} of ${championHeritage}! Will they succeed upon their quest and conquer the mighty ${creatureInput.name}? Will they fail and become another snack? Let's decide...`


const theWhiteRaven = {name: 'White Raven', hp: Infinity, strength: rollDice(40)*20}

const subMonsters = [{name: 'Slime', hp: 3, strength: rollDice(2)+1}, 
{name: 'Kobold', hp: 3, strength: rollDice(3)+1}, 
{name: 'Fleshling', hp: 3, strength: rollDice(2)+1}]

let form = document.querySelector('#userInput')
form.addEventListener('submit', (e) => {
    e.preventDefault()

    localStorage.name = document.querySelector('#championName').value
    localStorage.title = document.querySelector('#championTitle').value
    localStorage.heritage = document.querySelector('#championHeritage').value
    if(document.querySelector('#godMode').value === 'What do you mean? An African or European swallow?') {
        localStorage.mode = true;
    }
})