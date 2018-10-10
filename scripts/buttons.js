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
    `<button type='button' id='fight.0' class='button'>Continue</button>`, //3
    `<button type='button' id='5' class='storyButton1'>Choose the Sword</button>
    <button type='button' id='6' class='storyButton2'>Choose the Shield</button>`, //4
    `<button type='button' id='7' class='button'>Continue</button>`, //5
    `<button type='button' id='7' class='button'>Continue</button>`, //6
    `<button type='button' id='8' class='storyButton1'>Follow the Path</button>
    <button type='button' id='10' class='storyButton2'>Sneak in the Brush</button>`, //7
    `<button type='button' id='9' class='storyButton1'>Yes</button>
    <button type='button' id='10' class='storyButton2'>No</button>`, // 8
    '', //9
    `<button type='button id='fight.1' class='button'>Continue</button>`, //10
    '', //11
    '' //12
]
module.exports = {storyButtonInputs, insertButtons};