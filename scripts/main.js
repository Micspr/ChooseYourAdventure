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
        storySoFar += story.script[champion.championValues.storyPoint]
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
    localStorage.clear()
    submitForm()
})

let storyDisplay = document.querySelector('#chronoLog')
storyDisplay.addEventListener('click', (e) => {
    e.preventDefault()

    document.querySelector('.mainContainer').innerHTML = localStorage.story
})