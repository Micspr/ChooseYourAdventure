(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const monster = require('./monster.js')
const rollDice = require('./rollDice.js')


const championValues = {}

let creatureInput = monster.monsters[rollDice(3)]

const championSet = () => {
    championValues = {
        'name' : localStorage.getItem('name') || "", 
        'title' : localStorage.getItem('title') || "", 
        'heritage' : localStorage.getItem('heritage') || "", 
        'mode' : localStorage.getItem('mode') || "",
        'monster' : creatureInput,
        'storyPoint': 0
    }
}

module.exports = {championValues, championSet}
},{"./monster.js":3,"./rollDice.js":4}],2:[function(require,module,exports){
const storyScript = require('./story.js')
const champion = require('./champion.js')


let storySoFar = ""
const insertStory = (text) => `<div class='storyText'>${text}</div>`

const insertButtons = (btN) => `<div class='storyDiv'>${btN}/div>`

const storyButtonInputs = [
    '', 
    `<button type='button' id='accept' class='storyButton1'>Accept Quest</button>
    <button type='button' id='decline' class='storyButton2'>Decline Quest</button>`
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
    champion.championSet()
    champion.championValues.storyPoint = 1;
    document.querySelector('#adventureTitle').textContent = `Welcome to ${champion.championValues.name}'s Adventure!`
    storySoFar += storyScript[champion.championValues.storyPoint]
    localStorage.story = storySoFar
    form.remove();
    console.log(champion.championValues)
    document.querySelector('.mainContainer').innerHTML = `${insertStory(storyScript[champion.championValues.storyPoint])} ${insertButtons(storyButtonInputs[champion.championValues.storyPoint])}`
})
},{"./champion.js":1,"./story.js":5}],3:[function(require,module,exports){
const rollDice = require('./rollDice.js')


const monsters = [{name: 'Brutalus', hp: 20, strength: rollDice(8), ability: 'devour' /*{devour: creatureInput.hp += 5}*/, storyPath: 0},
//Schism Hydra
{name: 'Proximo', hp: 35, strength: rollDice(8), ability: {Breath: rollDice(3)*5}, storyPath: 1},
// Chromatic Dragon
{name: 'Xyligtl', hp: 50, strength: rollDice(4), ability: {Consume:/*Select Loss Event*/'woops'}, storyPath: 2}]
//Chaos Spawn

const theWhiteRaven = {name: 'White Raven', hp: Infinity, strength: rollDice(40)*20}

const subMonsters = [{name: 'Slime', hp: 3, strength: rollDice(2)+1}, 
{name: 'Kobold', hp: 3, strength: rollDice(3)+1}, 
{name: 'Fleshling', hp: 3, strength: rollDice(2)+1}]

module.exports = {monsters, theWhiteRaven, subMonsters}
},{"./rollDice.js":4}],4:[function(require,module,exports){
const rollDice = (diceNum) => Math.floor(Math.random() * diceNum)

module.exports = rollDice;
},{}],5:[function(require,module,exports){
const champion = require('./champion.js')


const storyScript = ['',`<p>Gather and behold! The story of ${champion.championValues.name}, the ${champion.championValues.title} of ${champion.championValues.heritage}!<br>
Will they succeed upon their quest and conquer the mighty ${champion.championValues.monster}?<br>
Will they fail and become another snack?<br>
Let's decide...</p>`]

module.exports = storyScript;
},{"./champion.js":1}]},{},[2]);
