const story = require('./story.js')
const storyButtons = require('./buttons.js')
const champion = require('./champion.js')


const updateButtons = (storySoFar) => {
    let buttonOne = document.querySelector('.storyButton1') || ''
    let buttonTwo = document.querySelector('.storyButton2') || ''
    let contButton = document.querySelector('.contButton') || ''

    if(buttonOne !== ''){
        buttonOne.addEventListener('click', (e) => {
        e.preventDefault()

        champion.championValues.storyPoint = Number.parseInt(buttonOne.id)
        storySoFar += story.script[champion.championValues.storyPoint]
        localStorage.story = storySoFar
        document.querySelector('.mainContainer').innerHTML = (
            `${story.insertStory(story.script[champion.championValues.storyPoint])} 
            ${storyButtons.insertButtons(storyButtons.storyButtonInputs[champion.championValues.storyPoint])}`)
        updateButtons(storySoFar)
        })
    }

    if(buttonTwo !== ''){
        buttonTwo.addEventListener('click', (e) => {
        e.preventDefault()

        champion.championValues.storyPoint = Number.parseInt(buttonTwo.id)
        storySoFar += story.script[champion.championValues.storyPoint]
        localStorage.story = storySoFar
        document.querySelector('.mainContainer').innerHTML = (
            `${story.insertStory(story.script[champion.championValues.storyPoint])} 
            ${storyButtons.insertButtons(storyButtons.storyButtonInputs[champion.championValues.storyPoint])}`)
        updateButtons(storySoFar)
        })
    }

    if(contButton !== ''){
        contButton.addEventListener('click', (e) => {
        e.preventDefault()
        
        champion.championValues.storyPoint = Number.parseInt(contButton.id)
        if(contButton.textContent !== 'Back to Story') {
            storySoFar += story.script[champion.championValues.storyPoint]
            localStorage.story = storySoFar
        }
        document.querySelector('.mainContainer').innerHTML = (
            `${story.insertStory(story.script[champion.championValues.storyPoint])} 
            ${storyButtons.insertButtons(storyButtons.storyButtonInputs[champion.championValues.storyPoint])}`)
        updateButtons(storySoFar)
        })
    }
}


module.exports = updateButtons;