const monsters = require('./monster.js')
const script = []
const trapDamage = monsters[0].strength;

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

const buildScript = (champObj) => {
    const preFabScriptArr = [
        `<form id='userInput'>
            <label for='championName'>Enter your name, Champion:</label>
            <input type="text" id="championName" pattern="[a-zA-Z]+" required><br>
            <label for='championTitle'>What is your title?</label>
            <input type="text" id='championTitle' pattern='[a-zA-Z0-9]+' required><br>
            <label for='ChampionHeritage'>Where are you from?</label>
            <input type='text' id='championHeritage' pattern="[a-zA-Z]+" required><br>
            <label for='godMode'>What... is the air-speed velocity of an unladen swallow?</label>
            <input type="text" id='godMode'><br><br>
            <input type="submit" class='button'>
        </form>`, //0
        `<p>Gather and behold! The story of ${champObj.name}, the ${champObj.title} of ${champObj.heritage}!<br>
            Will you succeed upon your quest and conquer the mighty Proximo, the Fire Scourge and Devourer of Man?<br>
            Will you fail and become another snack, leaving ${champObj.heritage} to ruin?<br>
            Let's decide...</p>`, //1
        `<p>${champObj.name} went home rather than hunt Proximo.<br>
            Proximo took the opportunity to eat every living creature in ${champObj.heritage} and razed it to the ground.<br>
            Lament your choices in the belly of the Devourer.</p>`, //2
        `<p>You begins your journey on a long winding path on the edge of the great ${champObj.heritage} Valley.<br>
            While following the path along a set of cliffs, you encounter a hideous Kobold bearing the three-clawed mark of Proximo dragging a sack across the path.<br>
            "Clearly to complete this quest, I must be able to slaughter one of Proximo's weakest of minions!",<br>
            ${champObj.name} thought as they dove into the poor creature.</p>`, //3
        `<p>With the kobold now defeated, you notice a gleam of treasure skittering towards a nearby cliff.<br>
            The items must have come from the sack the kobold was carrying and appear to be a sword and a shield.<br>
            With how close the items are to the edge, you can only retrieve one before they teeter into the brink.<br>
            Which will you choose?</p>`, //4
        `<p>With an ungraceful tumble you narrowly prevent ${champObj.swordChosen.name} from slipping into the void.<br>
            ${champObj.swordChosen.string}</p>`, //5
        `<p>The shield tumbles over the edge. Being as brave as you are, you tumble after it.<br> Thankfully, you land on a small outcropping with the shield in hand.<br>
            ${champObj.shieldChosen.string}</p>`, //6
        `<p>Further down the path in a great chasm, you note some rather obvious tracks leading around a bend.<br>
            Do you follow the path, or take a 'shortcut' through the brush?</p>`, //7
        `<p>The tracks were a trap!<br>The dragon swoops in and pours a great gout of flame over the path, dealing ${trapDamage} damage to you.<br>
            Proximo knows you're hunting it! Cursing your luck, you decide whether you should rest in the chasm wall or chase the dragon into the now smoking brush.</p>`, //8
        `<p>You decide to make camp and rest for the night...<br>
            You awake to the smell of smoke. A great wildfire is consuming the forest before you!<br>
            As you snap back to your senses you hear screaming in the distance.<br>
            Without thinking, you rush to the source only to come face to face with Proximo's head and a man in a loincloth.<br>
            "KRILGOR THE STRONGEST! ALL HAIL KRILGOR THE DRAGON SLAYER!"<br>
            The words echo through your mind, as you realize that your chance for glory has been lost. It's going to be a long trip home.</p>`, //9
        `<p>You tip-toe into the brush, being careful to stay quiet. Something about the tracks just seems unnatural...<br>
            Several minutes later, you hear screaming in the distance. The wind begins to pulse in great gusts as it carries the pungent odor of charred flesh and burning wood.<br>
            You look up just in time to see some poor soul become Proximo's next meal. The chasm goes up in a great explosion of flame as Proximo's wing beats fuel the fire.<br>
            </p>`, //10
        `<p>Glory be to ${champObj.name} and your lineage! Proximo has been defeated, and ${champObj.heritage} is saved!<br>
            Now you just need to find out what to do with all of that treasure!</p>`, //11
        `<p>Proximo stands triumphantly over you with mouth agape. You prepare for the blow and are met with nothing but darkness.</p>`//12
    ]

    for(let i = 0; i < preFabScriptArr.length; i++){
        script.push(preFabScriptArr[i])
    }
}

module.exports = {buildScript, script, insertStory};