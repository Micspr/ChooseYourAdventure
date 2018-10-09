const champion = require('./champion.js')


const storyScript = ['',`<p>Gather and behold! The story of ${champion.championValues.name}, the ${champion.championValues.title} of ${champion.championValues.heritage}!<br>
Will they succeed upon their quest and conquer the mighty ${champion.championValues.monster}?<br>
Will they fail and become another snack?<br>
Let's decide...</p>`]

module.exports = storyScript;