const storyScript = requires('./story.js')
let storySoFar = ""
let champion = {}
const insertStory = (text) => `<div class='storyText'>${text}</div>`
const rollDice = (diceNum) => Math.floor(Math.random() * diceNum)
const championSet = () => {
    champion = {
        'name' : localStorage.getItem('name') || "", 
        'title' : localStorage.getItem('title') || "", 
        'heritage' : localStorage.getItem('heritage') || "", 
        'mode' : localStorage.getItem('mode') || "",
        'monster' : creatureInput,
        'storyPoint': 0
    }
}

const monsters = [{name: 'Brutalus', hp: 20, strength: rollDice(8), ability: 'devour' /*{devour: creatureInput.hp += 5}*/, storyPath: 0},
//Schism Hydra
{name: 'Proximo', hp: 35, strength: rollDice(8), ability: {Breath: rollDice(3)*5}, storyPath: 1},
// Chromatic Dragon
{name: 'Xyligtl', hp: 50, strength: rollDice(4), ability: {Consume:/*Select Loss Event*/'woops'}, storyPath: 2}]
//Chaos Spawn

let creatureInput = monsters[rollDice(3)]

const theWhiteRaven = {name: 'White Raven', hp: Infinity, strength: rollDice(40)*20}

const subMonsters = [{name: 'Slime', hp: 3, strength: rollDice(2)+1}, 
{name: 'Kobold', hp: 3, strength: rollDice(3)+1}, 
{name: 'Fleshling', hp: 3, strength: rollDice(2)+1}]

const storyButtonInputs = [
    '', 
    `<div class='storyDiv'><button type='button' id='accept' class='storyButton1'>Accept Quest</button>
    <button type='button' id='decline' class='storyButton2'>Decline Quest</button></div>`
]

let form = document.querySelector('#userInput')
form.addEventListener('submit', (e) => {
    e.preventDefault()

    localStorage.name = document.querySelector('#championName').value
    localStorage.title = document.querySelector('#championTitle').value
    localStorage.heritage = document.querySelector('#championHeritage').value
    if(document.querySelector('#godMode').value === 'What do you mean? An African or European swallow?') {
        localStorage.mode = true;
    }
    championSet()
    champion.storyPoint = 1;
    document.querySelector('#adventureTitle').textContent = `Welcome to ${champion.name}'s Adventure!`
    storySoFar += storyScript[champion.storyPoint]
    localStorage.story = storySoFar
    form.remove();
    document.querySelector('.mainContainer').innerHTML = `${insertStory(storyScript[champion.storyPoint])} ${storyButtonInputs[champion.storyPoint]}`
})