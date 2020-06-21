const kai_utils = (()=>{
    let utils = {}

    // finds all matching trait variations (as an array)
    function findMatching(trait, match={gene: 'Any', gender:'Any', rarity:'Any', series:'Any'}){

        match.gene = match.hasOwnProperty('gene') ? match.gene : 'Any'
        match.gender = match.hasOwnProperty('gender') ? match.gender : 'Any'
        match.rarity = match.hasOwnProperty('rarity') ? match.rarity : 'Any'
        match.series = match.hasOwnProperty('series') ? match.series : 'Any'

        let list = avastarTraits.hasOwnProperty(trait) ? avastarTraits[trait] : []
        return list.reduce( (prev,curr)=>{
            // not null
            let pass = curr !== null
            // any gene / name or match
            pass = pass ? match.gene === 'Any' || curr.name === match.gene : false
            // any gender or match
            pass = pass ? curr.gender === 'Any' || match.gender === 'Any' || curr.gender === match.gender : false
            // any rarity or match
            pass = pass ? match.rarity === 'Any' || curr.rarity === match.rarity : false
            // any series or match
            pass = pass ? match.series === 'Any' || curr.series.indexOf(match.series) !== -1 : false

            if(pass){ prev.push(curr) }
            return prev
        },[])
    }

    // enable console
    function enableConsole(){
        var i = document.createElement('iframe')
        i.style.display = 'none'
        document.body.appendChild(i)
        window.console = i.contentWindow.console
    }

    utils.findMatching = findMatching
    utils.enableConsole = enableConsole
    return utils
})()