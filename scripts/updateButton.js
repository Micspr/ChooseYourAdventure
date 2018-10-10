const story = require('./story.js')
const storyButtons = require('./buttons.js')


const updateButtons = (num) => {
    let buttonOne = document.querySelector('.storyButton1')
    let buttonTwo = document.querySelector('.storyButton2')
    buttonOne.addEventListener('click', (e) => {
        e.preventDefault()


    })

    buttonTwo.addEventListener('click', (e) => {
        e.preventDefault()

        
    })
}

module.exports = updateButtons;