const champion = require('./champion.js')

const insertButtons = (btN) => `<div class='storyDiv'>${btN}</div>`

let didWin = 0;

const setDidWin = (bool) => {
    if(bool) {
        didWin = 11
    } else {
        didWin = 12
    }
}
const storyButtonInputs = [
    '', 
    `<button type='button' id='3' class='storyButton1'>Accept Quest</button>
    <button type='button' id='2' class='storyButton2'>Decline Quest</button>`, 
    '', 
    `<button type='button' id='13' class='contButton'>Continue</button>`,
    `<button type='button' id='5' class='storyButton1'>Choose the Sword</button>
    <button type='button' id='6' class='storyButton2'>Choose the Shield</button>`,
    `<button type='button' id='7' class='contButton'>Continue</button>`,
    `<button type='button' id='7' class='contButton'>Continue</button>`,
    `<button type='button' id='8' class='storyButton1'>Follow the Path</button>
    <button type='button' id='10' class='storyButton2'>Sneak in the Brush</button>`,
    `<button type='button' id='9' class='storyButton1'>Rest for the Night</button>
    <button type='button' id='10' class='storyButton2'>Press On!</button>`, 
    '',
    `<button type='button' id='14' class='contButton'>Continue</button>`,
    '',
    '',
    `<button type='button' id='4' class='contButton'>Continue</button>`
    
]

const updateButton = () => storyButtonInputs[14].id = didWin

const initSSFButton = () => {
    return `<button type='button' id='${champion.championValues.storyPoint}' class='contButton'>Back to Story</button>`
}
module.exports = {storyButtonInputs, insertButtons, initSSFButton, setDidWin, updateButton};