const insertButtons = (btN) => `<div class='storyDiv'>${btN}</div>`

const storyButtonInputs = [
    '', 
    `<button type='button' id='accept' class='storyButton1'>Accept Quest</button>
    <button type='button' id='decline' class='storyButton2'>Decline Quest</button>`
]

module.exports = {storyButtonInputs, insertButtons};