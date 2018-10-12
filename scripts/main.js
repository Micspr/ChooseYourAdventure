const story = require('./story.js')
const storyButtons = require('./buttons.js')
const champion = require('./champion.js')
const treasure = require('./weapons.js')
const updateButtons = require('./updateButton.js')


let storySoFar = ""

const patternOne = /^[a-zA-Z\s]+$/
const patternTwo = /^[a-zA-Z0-9\s]+$/

// document.addEventListener('DOMContentLoaded', function(event) {
//     if(localStorage.getItem('story') !== undefined) {
//         updateButtons(localStorage.story)
//     }
// })

const initStory = (e) => {
    e.preventDefault()

    if(!patternOne.test(document.querySelector('#championName').value)) {alert('Your name must be letters and spaces only.')}
    if(!patternTwo.test(document.querySelector('#championTitle').value)) {alert('Your title must be letters, numbers, and spaces only.')}
    if(!patternOne.test(document.querySelector('#championHeritage').value)) {alert('Your heritage must be letters and spaces only.')}
    localStorage.name = document.querySelector('#championName').value
    localStorage.title = document.querySelector('#championTitle').value
    localStorage.heritage = document.querySelector('#championHeritage').value
    // if(document.querySelector('#godMode').value === 'What do you mean? An African or European swallow?') {
    //     localStorage.mode = true;
    // }
    champion.championSet()
    story.buildScript(champion.championValues, treasure.swords, treasure.shields)
    champion.championValues.storyPoint = 1;
    document.querySelector('#adventureTitle').textContent = `Welcome to ${champion.championValues.name}'s Adventure!`
    storySoFar += story.insertStory(story.script[champion.championValues.storyPoint])
    localStorage.story = storySoFar
    form.remove();
    document.querySelector('.mainContainer').innerHTML = (
        `${story.insertStory(story.script[champion.championValues.storyPoint])} 
        ${storyButtons.insertButtons(storyButtons.storyButtonInputs[champion.championValues.storyPoint])}`)
    updateButtons(storySoFar)
}

let form = document.querySelector('#userInput')
const submitForm = () => {
    form.addEventListener('submit', initStory)
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
    localStorage.clear()
    window.location.reload(true)
})

let storyDisplay = document.querySelector('#chronoLog')
storyDisplay.addEventListener('click', (e) => {
    e.preventDefault()

    document.querySelector('.mainContainer').innerHTML = (
        `${story.insertStory(localStorage.story)}${storyButtons.insertButtons(storyButtons.initSSFButton())}`)
    updateButtons(storySoFar)
})

module.exports = storySoFar;