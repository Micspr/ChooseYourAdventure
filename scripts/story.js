const script = []

const insertStory = (text) => `<div class='storyText'>${text}</div>`

// const buildScript = (champObj, monstArr, swordObj, shieldObj) => {
//     const preFabScriptArr = [
//         '',//0
//         `<p>Gather and behold! The story of ${champObj.name}, the ${champObj.title} of ${champObj.heritage}!<br>
//             Will they succeed upon their quest and conquer the mighty ${monstArr[champObj.monsterTrack].name}?<br>
//             Will they fail and become another snack?<br>
//             Let's decide...</p>`, //1
//         { //Happily-ever-after Doom
//         0:`<p>${champObj.name} went home. ${monstArr[champObj.monsterTrack].name} ate all the livestock and their village starved to death.<br> Oops.</p>`,
//         1: `<p>${champObj.name} went home. ${monstArr[champObj.monsterTrack].name} devoured every creature in the valley and then razed it to ash.<br> Oops.</p>`,
//         2: `<p>${champObj.name} went home. ${monstArr[champObj.monsterTrack].name} came later that night and assimilated his village.<br> 
//             ${champObj.name} will now be able to eternally regret their choices as part of the hive beast as it slinks across the country and expands.</p>`
//         }, //2
//         { //Trek to monster
//             0: `<p>${champObj.name} began their journey and encountered a minion of the heinous ${monstArr[champObj.monsterTrack].name}.
//                 A ${monstArr[]} was</p>`
//         }
// ]
//     for(let i = 0; i < preFabScriptArr.length; i++){
//         script.push(preFabScriptArr[i])
//     }
// }

module.exports = {buildScript, script, insertStory};