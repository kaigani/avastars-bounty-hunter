const kai_globals = {}
kai_globals.userJson = `[
    {
        "name":"Leg. Skin+Hair",
        "type":"Basic",
        "maxOverallRarity":"Legendary",
        "gender" : "Any",
        "traits":{
            "skinTone" : 
            {
                "gene" : "Any",
                "rarity" : "Legendary"
            },
            "hairColor" : {
                "gene" : "Any",
                "rarity" : "Legendary"
            }
        }
    },{
        "name":"Leg. Skin+Eyes",
        "type":"Basic",
        "maxOverallRarity":"Legendary",
        "gender" : "Any",
        "traits":{
            "skinTone" : {
                "rarity":"Legendary"
            },
            "eyeColor" : {
                "rarity":"Legendary"
            }
        }
    },{
        "name":"Cat",
        "type":"Basic",
        "maxOverallRarity":"Common",
        "gender" : "Female",
        "traits":{
            "facialFeature" : {
                "gene" : "Cat Whiskers"
            },
            "nose" : {
                "gene" : "Cat Nose"
            }
        }
    }
]`
kai_globals.userData = JSON.parse(kai_globals.userJson)

kai_globals.traitsList = [
    'skinTone',
    'hairColor',
    'eyeColor',
    'backgroundColor',
    'backdrop',
    'ears',
    'face',
    'nose',
    'mouth',
    'facialFeature',
    'eyes',
    'hairStyle'
]

kai_globals.rarityLevels = [ 'Any','Common','Uncommon','Rare','Epic','Legendary' ]
kai_globals.rarityColors = [
    '#DFE3E8', // any
    'rgb(0, 143, 251)', // common
    'rgb(0, 227, 150)', // uncommon
    'rgb(254, 176, 25)', // rare
    'rgb(119, 93, 208)', // epic
    'rgb(255, 69, 96)' // legendary
]

