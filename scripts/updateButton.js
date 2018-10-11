const story = require('./story.js')
const storyButtons = require('./buttons.js')
const champion = require('./champion.js')
const fight = require('./fight.js')


const updateButtons = (storySoFar) => {
    let buttonOne = document.querySelector('.storyButton1') || ''
    let buttonTwo = document.querySelector('.storyButton2') || ''
    let contButton = document.querySelector('.contButton') || ''

    if(buttonOne !== ''){
        buttonOne.addEventListener('click', (e) => {
        e.preventDefault()

        champion.championValues.storyPoint = Number.parseInt(buttonOne.id)
        if(Number.parseInt(buttonOne.id) === 5) {
            champion.championValues.strength = champion.championValues.swordChosen.strength
        }
        if(Number.parseInt(contButton) === 9) {
            champion.championValues.hp = champion.championValues.hp - story.trapDamage
        }
        storySoFar += story.insertStory(story.script[champion.championValues.storyPoint])
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
        if(Number.parseInt(buttonOne.id) === 6) {
            champion.championValues.damageReduction = champion.championValues.shieldChosen.damageReduction
        }
        if(Number.parseInt(buttonTwo.id) === 10) {
            story.script.push(`${fight.fightTwoText()}`)
        }
        storySoFar += story.insertStory(story.script[champion.championValues.storyPoint])
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
            storySoFar += story.insertStory(story.script[champion.championValues.storyPoint])
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