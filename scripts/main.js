const storyScript = require('./story.js')
const storyButtons = require('./buttons.js')
const champion = require('./champion.js')


let storySoFar = ""
const insertStory = (text) => `<div class='storyText'>${text}</div>`

const insertButtons = (btN) => `<div class='storyDiv'>${btN}/div>`

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
    document.querySelector('.mainContainer').innerHTML = `${insertStory(storyScript[champion.championValues.storyPoint])} ${insertButtons(storyButtons[champion.championValues.storyPoint])}`
})