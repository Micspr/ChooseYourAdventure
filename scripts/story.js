const script = []

const buildScript = (obj) => {
    const preFabScriptArr = ['',`<p>Gather and behold! The story of ${obj.name}, the ${obj.title} of ${obj.heritage}!<br>
    Will they succeed upon their quest and conquer the mighty ${obj.monsterTrack}?<br>
    Will they fail and become another snack?<br>
    Let's decide...</p>`]
    for(let i = 0; i < preFabScriptArr.length; i++){
        script.push(preFabScriptArr[i])
    }
}

module.exports = {buildScript, script};