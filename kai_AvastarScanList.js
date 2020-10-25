const kai_AvastarScanList = ( ()=>{

class AvastarScanList {
    constructor(o){

        this.count = 0
        this.list = []

        //this.constructor.register( 'Default', AvastarScanMatch )
           
        if(o){
            this.unserialize(o)
        }
    }

    pass(avastar){
        // If any of the match items in this list pass, return the name of the matching filter
        return this.list.reduce( (prev,curr)=>{
            return curr.pass(avastar) ? curr.name : prev
        }, null)
    }

    create(type='Default'){
        let record = new this.constructor.registry[type]()
        //item.unserialize(data)
        //this.add(item)
        return record
    }

    add(record){
        this.list.push(record)
        return this
    }

    find(id){
        return this.list.reduce( (prev,curr)=>{
            if(id === curr.id ){
                let item = new this.constructor.registry[curr.type]()
                item.unserialize( curr.serialize() )
                return item
            }else{
                return prev
            }
        }, null)
    }

    remove(id){
        this.list = this.list.reduce( (prev,curr)=>{
            if(id !== curr.id){
                prev.push(curr)
            }
            return prev
        },[])
    }

    // Add new / update existing
    update(record){

        let found = false

        this.list.map( row=>{
            if(row.id === record.id){
                // unserialize from external record 
                row.unserialize(record.serialize())
                found = true
            }
        })

        if(!found) this.add(record)
    }

    getKeys(){
        return this.list.reduce( (prev,curr)=>{
            prev.push({id:curr.id,type:curr.type,name:curr.name})
            return prev
        },[])
    }

    unserialize(arr){
        // no error checking
        this.list = arr.map(o=>{

            let item = new this.constructor.registry[o.type]()
            item.unserialize(o)
            return item
        })
    }

    // flattened into objects
    serialize(){
        return this.list.map( o=>{
            return o.serialize()
        })
    }

    load(){
        this.unserialize( JSON.parse(localStorage.getItem('kai_avastarScanList')) )
    }

    save(){
        localStorage.setItem('kai_avastarScanList', JSON.stringify(this.serialize()))
        debugger;
    }

}

// Class registry function
AvastarScanList.register = (type,classObject)=>{
    AvastarScanList.registry = AvastarScanList.registry || {}
    AvastarScanList.registry[type] = classObject
    return AvastarScanList // for chaining
}

const rarityOrder = [ 'Common', 'Uncommon', 'Rare', 'Epic', 'Legendary' ]

//
// MATCH CLASSES
//

class AvastarScanMatch {
    constructor(name=`Unnamed_${Date.now()}`){
        this.id = `${Date.now()+Math.random()}`
        this.name = name
        this.type = 'Default'
        this.active = true
    }

    serialize(){
        return {
            id: this.id,
            name: this.name,
            type: this.type,
            active: this.active,
        }
    }

    unserialize(o){
        this.id = o.id
        this.name = o.name
        this.active = o.hasOwnProperty('active') ? o.active : true
    }

    pass(avastar){
        return this.active
    }
}
/*
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
    }
*/
//
// BASIC - match by name and/or rarity
//
class AvastarScanBasicMatch extends AvastarScanMatch {
    constructor(name, maxOverallRarity = 'Legendary'){
        super(name)
        this.type = 'Basic'
        this.maxOverallRarity = maxOverallRarity
        this.gender = 'Any'
        this.series = 'Any'
        this.traits = {}
        kai_globals.traitsList.map( trait=>{
            this.traits[trait] = {
                gene: 'Any',
                rarity: 'Any'
            }
        })  
    }

    serialize(){
        let o = super.serialize()
        o.maxOverallRarity = this.maxOverallRarity
        o.gender = this.gender
        o.series = this.series
        o.traits = {}
        kai_globals.traitsList.map( trait=>{
            o.traits[trait] = {}
            o.traits[trait].gene = this.traits[trait].gene
            o.traits[trait].rarity = this.traits[trait].rarity
        })
        return o
    }

    unserialize(o){
        super.unserialize(o)
        this.maxOverallRarity = o.hasOwnProperty('maxOverallRarity') ? o.maxOverallRarity : 'Legendary'
        this.gender = o.hasOwnProperty('gender') ? o.gender : 'Any'
        this.series = o.hasOwnProperty('series') ? o.series : 'Any'
        o.traits = o.hasOwnProperty('traits') ? o.traits : {}
        this.traits = {}
        kai_globals.traitsList.map( trait=>{
            this.traits[trait] = {
                gene : o.traits[trait].hasOwnProperty('gene') ? o.traits[trait].gene : 'Any',
                rarity : o.traits[trait].hasOwnProperty('rarity') ? o.traits[trait].rarity : 'Any'
            }
        })
    }

    pass(avastar){
        return super.pass(avastar) && rarityOrder.indexOf(avastar.overallRarity) <= rarityOrder.indexOf(this.maxOverallRarity) &&
            Object.keys(this.traits).reduce( (prev,curr)=>{
                let gene = this.traits[curr].gene
                let rarity = this.traits[curr].rarity
                return prev && 
                    (gene === 'Any' || avastar.traits[curr].gene === gene) &&
                    (rarity === 'Any' || avastar.traits[curr].rarity === rarity)
            },true)
    }

    // key = gene | rarity
    // value = gene name | rarity level
    add(trait,key,value){
        this.traits[trait][key] = value
        return this
    }
    addName(trait,value){
        return this.add(trait,'gene',value)
    }
    addRarity(trait,value){
        return this.add(trait,'rarity',value)
    }
    addSkinTone(value){
        return this.add('skinTone',rarityOrder.indexOf(value) === -1 ? 'gene' : 'rarity',value)
    }
    addHairColor(value){
        return this.add('hairColor',rarityOrder.indexOf(value) === -1 ? 'gene' : 'rarity',value)
    }
    addEyeColor(value){
        return this.add('eyeColor',rarityOrder.indexOf(value) === -1 ? 'gene' : 'rarity',value)
    }
    addBgColor(value){
        return this.add('bgColor',rarityOrder.indexOf(value) === -1 ? 'gene' : 'rarity',value)
    }
    addBackdrop(value){
        return this.add('backdrop',rarityOrder.indexOf(value) === -1 ? 'gene' : 'rarity',value)
    }
    addFace(value){
        return this.add('face',rarityOrder.indexOf(value) === -1 ? 'gene' : 'rarity',value)
    }
    addEars(value){
        return this.add('ears',rarityOrder.indexOf(value) === -1 ? 'gene' : 'rarity',value)
    }
    addNose(value){
        return this.add('nose',rarityOrder.indexOf(value) === -1 ? 'gene' : 'rarity',value)
    }
    addMouth(value){
        return this.add('mouth',rarityOrder.indexOf(value) === -1 ? 'gene' : 'rarity',value)
    }
    addFacialFeature(value){
        return this.add('facialFeature',rarityOrder.indexOf(value) === -1 ? 'gene' : 'rarity',value)
    }
    addEyes(value){
        return this.add('eyes',rarityOrder.indexOf(value) === -1 ? 'gene' : 'rarity',value)
    }
    addHairStyle(value){
        return this.add('hairStyle',rarityOrder.indexOf(value) === -1 ? 'gene' : 'rarity',value)
    }  
}
//
// SCORE - find at score at n or above
//
class AvastarScanScoreMatch extends AvastarScanMatch {
    constructor(name, n=80){
        super(name)
        this.type = 'Score'
        this.n = n
    }

    serialize(){
        let o = super.serialize()
        o.n = this.n
        return o
    }

    unserialize(o){
        super.unserialize(o)
        this.n = o.n
    }

    pass(avastar){
        // Check score threshold >= n
        return super.pass(avastar) && avastar.score >= this.n
    }
}

//
// RARITY COUNT - find >= n of rarity (e.g. 'Legendary')
//
class AvastarScanRarityCount extends AvastarScanMatch {
    constructor(name, rarity='Common', n=12, maxOverallRarity='Legendary'){
        super(name)
        this.type = 'RarityCount'
        this.rarity = rarity
        this.n = n
        this.maxOverallRarity = maxOverallRarity
    }

    serialize(){
        let o = super.serialize()
        o.rarity = this.rarity
        o.n = this.n
        o.maxOverallRarity = this.maxOverallRarity
        return o
    }

    unserialize(o){
        super.unserialize(o)
        this.rarity = o.rarity
        this.n = o.n
        this.maxOverallRarity = o.hasOwnProperty('maxOverallRarity') ? o.maxOverallRarity : 'Legendary'
    }

    pass(avastar){
        // Check rarity count >= n
        return super.pass(avastar) && 
                rarityOrder.indexOf(avastar.overallRarity) <= rarityOrder.indexOf(this.maxOverallRarity) &&
                avastar.rawTraits.list.reduce( (prev,curr)=>curr.rarity === this.rarity ? prev+1:prev, 0) >= this.n
    }
}

//
// CYBORG - very specific Cyborg type - could be generalized
//
class AvastarScanCyborgMatch extends AvastarScanMatch {
    constructor(name, n=1){
        n = n > 0 && n <= 5 ? n : 1 // 1-5 cyborg parts to match
        super(name)
        this.type = 'Cyborg'
        this.n = n
    }

    serialize(){
        let o = super.serialize()
        o.n = this.n
        return o
    }

    unserialize(o){
        super.unserialize(o)
        this.n = o.n
    }

    pass(avastar){
        // Check for Cyborg set 
        return super.pass(avastar) && avastar.rawTraits.list.reduce( (prev,curr)=>curr.name === 'Cyborg' ? prev+1:prev, 0) >= this.n
    }
}

// CREATE NEW MATCH TYPES ON CLASS ------

AvastarScanList
    .register('Default', AvastarScanMatch)
    .register('Basic', AvastarScanBasicMatch)
    .register('Score', AvastarScanScoreMatch)
    .register('RarityCount', AvastarScanRarityCount)
    .register('Cyborg', AvastarScanCyborgMatch)

// INITIALIZE WITH DATA 
if( localStorage.getItem('kai_avastarScanList') === null){
    let avastarScanList = new AvastarScanList()
    avastarScanList.add(
        //new AvastarScanBasicMatch('My Match','Uncommon').addSkinTone('Amber Brown').addHairStyle('Legendary')
        new AvastarScanBasicMatch('Leg. Skin+Hair').addSkinTone('Legendary').addHairColor('Legendary')
    ).add(
        new AvastarScanBasicMatch('Leg. Skin+Eyes').addSkinTone('Legendary').addEyeColor('Legendary')
    ).add(
        new AvastarScanBasicMatch('Leg. Hair+Eyes').addHairColor('Legendary').addEyeColor('Legendary')
    ).add(
        new AvastarScanBasicMatch('Cat','Common').addEyes('Cat Eyes').addFacialFeature('Cat Whiskers')
    ).add(
        new AvastarScanBasicMatch('Vampire','Uncommon').addHairColor('Black').addEyeColor('Candy Apple').addMouth('Vampire')
    ).add(
        new AvastarScanCyborgMatch('Cyborg 3x',3)
    ).add (
        new AvastarScanScoreMatch('High Score',80)
    ).add(
        new AvastarScanRarityCount('3x Legendary','Legendary',3)
    )
    avastarScanList.save()
}

return AvastarScanList

// END CLOSURE
})()

