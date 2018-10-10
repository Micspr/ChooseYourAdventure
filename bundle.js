(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const insertButtons = (btN) => `<div class='storyDiv'>${btN}</div>`

// const storyButtonInputs = [
//     '', //0

//     `<button type='button' id='1' class='storyButton1'>Accept Quest</button>
//     <button type='button' id='2' class='storyButton2'>Decline Quest</button>`, //1

//     `<button type='button' id='3' class='button'>Continue</button>`, //2

//     `<button type='button' id='4' class ='storyButton1'>Pick the Sword</button>
//     <button type='button' id='5' class='storyButton2'>Pick the Shield</button>`, //3

//     `<button type='button' id='6' class='button'>Continue</button>`, //4

//     `<button type='button' id='7' class='storyButton1'>Follow the Tracks</button>
//     <button type='button' id='10' class='storyButton2'>Through the Brush</button>`, //5

//     `<button type='button' id='8' class='storyButton1'>Yes</button>
//     <button type='button' id='9' class='storyButton2'>No</button>`, //6

//     `<button type='button' id='11' class='storyButton1'>Yes</button>
//     <button type='button' id='12' class='storyButton2'>No</button>` //7
// ]

const storyButtonInputs = [
    '', //0
    `<button type='button' id='3' class='storyButton1'>Accept Quest</button>
    <button type='button' id='2' class='storyButton2'>Decline Quest</button>`, //1
    '', //2
    `<button type='button' id='fight.0' class='contButton'>Continue</button>`, //3
    `<button type='button' id='5' class='storyButton1'>Choose the Sword</button>
    <button type='button' id='6' class='storyButton2'>Choose the Shield</button>`, //4
    `<button type='button' id='7' class='contButton'>Continue</button>`, //5
    `<button type='button' id='7' class='contButton'>Continue</button>`, //6
    `<button type='button' id='8' class='storyButton1'>Follow the Path</button>
    <button type='button' id='10' class='storyButton2'>Sneak in the Brush</button>`, //7
    `<button type='button' id='9' class='storyButton1'>Yes</button>
    <button type='button' id='10' class='storyButton2'>No</button>`, // 8
    '', //9
    `<button type='button id='fight.1' class='contButton'>Continue</button>`, //10
    '', //11
    '' //12
]
module.exports = {storyButtonInputs, insertButtons};
},{}],2:[function(require,module,exports){
const rollDice = require('./rollDice.js')
const weapons = require('./weapons.js')


const championValues = {}
const sword = weapons.swords[rollDice(10)]
const shield = weapons.shields[rollDice(10)]

const championSet = () => {
    championValues.name = localStorage.getItem('name')
    championValues.title = localStorage.getItem('title')
    championValues.heritage = localStorage.getItem('heritage')
    championValues.mode = localStorage.getItem('mode')
    championValues.monsterTrack = rollDice(3)
    championValues.storyPoint = 0
    championValues.swordChosen = sword
    championValues.shieldChosen = shield
    championValues.hp = 30
}

module.exports = {championValues, championSet}
},{"./rollDice.js":5,"./weapons.js":8}],3:[function(require,module,exports){
const story = require('./story.js')
const storyButtons = require('./buttons.js')
const champion = require('./champion.js')
const treasure = require('./weapons.js')
const updateButtons = require('./updateButton.js')


let storySoFar = ""

let form = document.querySelector('#userInput')
const submitForm = () => {
    form.addEventListener('submit', (e) => {
        e.preventDefault()

        localStorage.name = document.querySelector('#championName').value
        localStorage.title = document.querySelector('#championTitle').value
        localStorage.heritage = document.querySelector('#championHeritage').value
        if(document.querySelector('#godMode').value === 'What do you mean? An African or European swallow?') {
            localStorage.mode = true;
        }
        champion.championSet()
        story.buildScript(champion.championValues, treasure.swords, treasure.shields)
        champion.championValues.storyPoint = 1;
        document.querySelector('#adventureTitle').textContent = `Welcome to ${champion.championValues.name}'s Adventure!`
        storySoFar += story.script[champion.storyPoint]
        localStorage.story = storySoFar
        form.remove();
        document.querySelector('.mainContainer').innerHTML = (
            `${story.insertStory(story.script[champion.championValues.storyPoint])} 
            ${storyButtons.insertButtons(storyButtons.storyButtonInputs[champion.championValues.storyPoint])}`)
        updateButtons()
    })
}

submitForm()

let reset = document.querySelector('#restart')
reset.addEventListener('click', (e) => {
    e.preventDefault()

    champion.championValues.storyPoint = 0;
    document.querySelector('#adventureTitle').textContent = 'Choose Your Adventure!'
    document.querySelector('.mainContainer').innerHTML = (
        `${story.insertStory(story.script[champion.championValues.storyPoint])} 
        ${storyButtons.insertButtons(storyButtons.storyButtonInputs[champion.championValues.storyPoint])}`)
    submitForm()
})
},{"./buttons.js":1,"./champion.js":2,"./story.js":6,"./updateButton.js":7,"./weapons.js":8}],4:[function(require,module,exports){
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

module.exports = monsters = [
    {name: 'Proximo', hp: 35, strength: rollDice(8)+1},
    {name: 'Kobold', hp: 3, strength: rollDice(3)+1}
];

},{"./rollDice.js":5}],5:[function(require,module,exports){
module.exports = rollDice = (diceNum) => Math.floor(Math.random() * diceNum);
},{}],6:[function(require,module,exports){
const monsters = require('./monster.js')
const script = []
const trapDamage = monsters[0].strength;

const insertStory = (text) => `<div class='storyText'>${text}</div>`

// const buildScript = (champObj, monstArr, swordObj, shieldObj) => {
//     const preFabScriptArr = [
//         '',//0
//         `<p>Gather and behold! The story of ${champObj.name}, the ${champObj.title} of ${champObj.heritage}!<br>
//             Will they succeed upon their quest and conquer the mighty ${monstArr[champObj.monsterTrack].name}?<br>
//             Will they fail and become another snack?<br>
//             Let's decide...</p>`, //1
//         { //Happily-ever-after Doom
//         0:`<p>${champObj.name} went home. ${monstArr[champObj.monsterTrack].name} ate all the livestock and their village starved to death.<br> Oops.</p>`,
//         1: `<p>${champObj.name} went home. ${monstArr[champObj.monsterTrack].name} devoured every creature in the valley and then razed it to ash.<br> Oops.</p>`,
//         2: `<p>${champObj.name} went home. ${monstArr[champObj.monsterTrack].name} came later that night and assimilated his village.<br> 
//             ${champObj.name} will now be able to eternally regret their choices as part of the hive beast as it slinks across the country and expands.</p>`
//         }, //2
//         { //Trek to monster
//             0: `<p>${champObj.name} began their journey and encountered a minion of the heinous ${monstArr[champObj.monsterTrack].name}.
//                 A ${monstArr[]} was</p>`
//         }
// ]
//     for(let i = 0; i < preFabScriptArr.length; i++){
//         script.push(preFabScriptArr[i])
//     }
// }

const fight = {0: 0, 1: 0}

const buildScript = (champObj) => {
    const preFabScriptArr = [
        `<form id='userInput'>
            <label for='championName'>Enter your name, Champion:</label>
            <input type="text" id="championName" pattern="[a-zA-Z]+" required><br>
            <label for='championTitle'>What is your title?</label>
            <input type="text" id='championTitle' pattern='[a-zA-Z0-9]+' required><br>
            <label for='ChampionHeritage'>Where are you from?</label>
            <input type='text' id='championHeritage' pattern="[a-zA-Z]+" required><br>
            <label for='godMode'>What... is the air-speed velocity of an unladen swallow?</label>
            <input type="text" id='godMode'><br><br>
            <input type="submit" class='button'>
        </form>`, //0
        `<p>Gather and behold! The story of ${champObj.name}, the ${champObj.title} of ${champObj.heritage}!<br>
            Will you succeed upon your quest and conquer the mighty Proximo, the Fire Scourge and Devourer of Man?<br>
            Will you fail and become another snack, leaving ${champObj.heritage} to ruin?<br>
            Let's decide...</p>`, //1
        `<p>${champObj.name} went home rather than hunt Proximo.<br>
            Proximo took the opportunity to eat every living creature in ${champObj.heritage} and razed it to the ground.<br>
            Lament your choices in the belly of the Devourer.</p>`, //2
        `<p>You begin your journey on a long winding path on the edge of the great ${champObj.heritage} Valley.<br>
            While following the path along a set of cliffs, you encounter a hideous Kobold bearing the three-clawed mark of Proximo dragging a sack across the path.<br>
            "Clearly to complete this quest, I must be able to slaughter one of Proximo's weakest of minions!",<br>
            ${champObj.name} thought as they dove into the poor creature.</p>`, //3
        `<p>With the kobold now defeated, you notice a gleam of treasure skittering towards a nearby cliff.<br>
            The items must have come from the sack the kobold was carrying and appear to be a sword and a shield.<br>
            With how close the items are to the edge, you can only retrieve one before they teeter into the brink.<br>
            Which will you choose?</p>`, //4
        `<p>With an ungraceful tumble you narrowly prevent ${champObj.swordChosen.name} from slipping into the void.<br>
            ${champObj.swordChosen.string}</p>`, //5
        `<p>The shield tumbles over the edge. Being as brave as you are, you tumble after it.<br> Thankfully, you land on a small outcropping with the shield in hand.<br>
            ${champObj.shieldChosen.string}</p>`, //6
        `<p>Further down the path in a great chasm, you note some rather obvious tracks leading around a bend.<br>
            Do you follow the path, or take a 'shortcut' through the brush?</p>`, //7
        `<p>The tracks were a trap!<br>The dragon swoops in and pours a great gout of flame over the path, dealing ${trapDamage} damage to you.<br>
            Proximo knows you're hunting it! Cursing your luck, you decide whether you should rest in the chasm wall or chase the dragon into the now smoking brush.</p>`, //8
        `<p>You decide to make camp and rest for the night...<br>
            You awake to the smell of smoke. A great wildfire is consuming the forest before you!<br>
            As you snap back to your senses you hear screaming in the distance.<br>
            Without thinking, you rush to the source only to come face to face with Proximo's head and a man in a loincloth.<br>
            "KRILGOR THE STRONGEST! ALL HAIL KRILGOR THE DRAGON SLAYER!"<br>
            The words echo through your mind, as you realize that your chance for glory has been lost. It's going to be a long trip home.</p>`, //9
        `<p>You tip-toe into the brush, being careful to stay quiet. Something about the tracks just seems unnatural...<br>
            Several minutes later, you hear screaming in the distance. The wind begins to pulse in great gusts as it carries the pungent odor of charred flesh and burning wood.<br>
            You look up just in time to see some poor soul become Proximo's next meal. The chasm goes up in a great explosion of flame as Proximo's wing beats fuel the fire.<br>
            </p>`, //10
        `<p>Glory be to ${champObj.name} and your lineage! Proximo has been defeated, and ${champObj.heritage} is saved!<br>
            Now you just need to find out what to do with all of that treasure!</p>`, //11
        `<p>Proximo stands triumphantly over you with mouth agape. You prepare for the blow and are met with nothing but darkness.</p>`//12
    ]

    for(let i = 0; i < preFabScriptArr.length; i++){
        script.push(preFabScriptArr[i])
    }
}

module.exports = {buildScript, script, insertStory};
},{"./monster.js":4}],7:[function(require,module,exports){
const story = require('./story.js')
const storyButtons = require('./buttons.js')
const champion = require('./champion.js')


const updateButtons = () => {
    let buttonOne = document.querySelector('.storyButton1') || ''
    let buttonTwo = document.querySelector('.storyButton2') || ''
    let contButton = document.querySelector('.contButton') || ''

    if(buttonOne !== ''){
        buttonOne.addEventListener('click', (e) => {
        e.preventDefault()

        champion.championValues.storyPoint = Number.parseInt(buttonOne.id)
        document.querySelector('.mainContainer').innerHTML = (
            `${story.insertStory(story.script[champion.championValues.storyPoint])} 
            ${storyButtons.insertButtons(storyButtons.storyButtonInputs[champion.championValues.storyPoint])}`)
        updateButtons()
        })
    }

    if(buttonTwo !== ''){
        buttonTwo.addEventListener('click', (e) => {
        e.preventDefault()

        champion.championValues.storyPoint = Number.parseInt(buttonTwo.id)
        document.querySelector('.mainContainer').innerHTML = (
            `${story.insertStory(story.script[champion.championValues.storyPoint])} 
            ${storyButtons.insertButtons(storyButtons.storyButtonInputs[champion.championValues.storyPoint])}`)
        updateButtons()
        })
    }

    if(contButton !== ''){
        contButton.addEventListener('click', (e) => {
        e.preventDefault()
        
        champion.championValues.storyPoint = Number.parseInt(contButton.id)
        document.querySelector('.mainContainer').innerHTML = (
            `${story.insertStory(story.script[champion.championValues.storyPoint])} 
            ${storyButtons.insertButtons(storyButtons.storyButtonInputs[champion.championValues.storyPoint])}`)
        updateButtons()
        })
    }
}


module.exports = updateButtons;
},{"./buttons.js":1,"./champion.js":2,"./story.js":6}],8:[function(require,module,exports){
const rollDice = require('./rollDice.js')

const swords = [
    {name: 'the Steel Sword', strength: (rollDice(4)+1)*2, string: 'The unimpressive steel sword is an upgrade over your previous hatchet, but clearly not worth the effort to save it.'}, 
    {name: 'the Steel Sword', strength: (rollDice(4)+1)*2, string: 'The unimpressive steel sword is an upgrade over your previous hatchet, but clearly not worth the effort to save it.'}, 
    {name: 'the Steel Sword', strength: (rollDice(4)+1)*2, string: 'The unimpressive steel sword is an upgrade over your previous hatchet, but clearly not worth the effort to save it.'},
    {name: `the Enchanted Sword of Monster Slaying +2`, strength: (rollDice(4)+1)*2+2, string: 'The mild Monster Slaying Enchantment provides a mild bonus over your previous weapon'},
    {name: `the Enchanted Sword of Monster Slaying +3`, strength: (rollDice(4)+1)*2+3, string: 'The Monster Slaying Enchantment provides a distinct bonus over your previous weapon.'},
    {name: `the Enchanted Sword of Monster Slaying +4`, strength: (rollDice(4)+1)*2+4, string: 'The impressive Monster Slaying Enchantment is a night and day increase over your old hatchet.'},
    {name: `Goldrin's Claymore`, strength: (rollDice(8)+1)*2+5, string: `The Goldrin's Claymore! Where the kobold managed to find it is a mystery, but clearly your quest is fated for glory.`},
    {name: `Goldrin's Claymore`, strength: (rollDice(8)+1)*2+6, string: `The Goldrin's Claymore! Where the kobold managed to find it is a mystery, but clearly your quest is fated for glory.`},
    {name: `Goldrin's Claymore`, strength: (rollDice(8)+1)*2+7, string: `The Goldrin's Claymore! Where the kobold managed to find it is a mystery, but clearly your quest is fated for glory.`},
    {name: `Goldrin's Claymore`, strength: (rollDice(8)+1)*2+8, string: `The Goldrin's Claymore! Where the kobold managed to find it is a mystery, but clearly your quest is fated for glory.<br>
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
},{"./rollDice.js":5}]},{},[3]);
