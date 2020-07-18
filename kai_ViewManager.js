class kai_ViewManager {

    constructor(dataManager){

        // expandable view container
        this.container = null 

        // data manager
        this.dataManager = dataManager

        // views for the container
        this.views = { 
            start : {
                el : null,
                template : `
                <div id="kai_myDiv"><b>Avastar Bounty Hunter v.0.2</b>/div>
                <div><button onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'open'} }))">Open</button></div>
                `,
                data : {}
            },
            list : {
                el : null,
                template : `
                <div>This is the list of filters</div>
                <div>
                    <select id='kai_list_select'>
                    </select>
                </div>
                <div>
                    <button onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'list_new'} }))">New</button>
                    <button onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'list_edit'} }))">Edit</button>
                    <button onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'list_delete'} }))">Delete</button>
                </div>
                `,
                data : {}
            },
            edit : {
                el : null,
                template : `
                <div>This is the edit filter panel</div>

                <input id="kai_edit_name" type="text" value="" onblur="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'edit_name', data:this.id} }))"></input>
                <div>
                    <div id='kai_edit_gender' class='box' onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'toggleBox', data:this.id} }))"><label>Gender</label><br/><span>Any</span></div>
                    <div id='kai_edit_series' class='box' onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'toggleBox', data:this.id} }))"><label>Series</label><br/><span>Any</span></div>
                    <div id='kai_edit_skinTone' class='box' onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'toggleBox', data:this.id} }))"><label>Skin Tone</label><br/><span>Any</span></div>
                    <div id='kai_edit_hairColor' class='box' onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'toggleBox', data:this.id} }))"><label>Hair Color</label><br/><span>Any</span></div>
                    <div id='kai_edit_eyeColor' class='box' onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'toggleBox', data:this.id} }))"><label>Eye Color</label><br/><span>Any</span></div>
                    <div id='kai_edit_backgroundColor' class='box' onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'toggleBox', data:this.id} }))"><label>Background Color</label><br/><span>Any</span></div>
                    <div id='kai_edit_backdrop' class='box' onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'toggleBox', data:this.id} }))"><label>Backdrop</label><br/><span>Any</span></div>
                    <div id='kai_edit_ears' class='box' onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'toggleBox', data:this.id} }))"><label>Ears</label><br/><span>Any</span></div>
                    <div id='kai_edit_face' class='box' onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'toggleBox', data:this.id} }))"><label>Face</label><br/><span>Any</span></div>
                    <div id='kai_edit_nose' class='box' onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'toggleBox', data:this.id} }))"><label>Nose</label><br/><span>Any</span></div>
                    <div id='kai_edit_mouth' class='box' onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'toggleBox', data:this.id} }))"><label>Mouth</label><br/><span>Any</span></div>
                    <div id='kai_edit_facialFeature' class='box' onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'toggleBox', data:this.id} }))"><label>Facial Feature</label><br/><span>Any</span></div>
                    <div id='kai_edit_eyes' class='box' onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'toggleBox', data:this.id} }))"><label>Eyes</label><br/><span>Any</span></div>
                    <div id='kai_edit_hairStyle' class='box' onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'toggleBox', data:this.id} }))"><label>Hair Style</label><br/><span>Any</span></div>
                </div>
                <div>
                    <button onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'edit_save'} }))">Save</button>
                    <button onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'edit_cancel'} }))">Cancel</button>
                </div>
                `,
                data : {
                    current: null // current data record when being edited
                }
            },
            alert : {
                el : null,
                template : `
                <h4>Found matching Avastars</h4>
                <div id='kai_alertbox'></div>
                <div onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'close'} }))"><button>Close</button></div>
                `,
                data : {}
            }
        } 

        // current view
        this.currentView = 'start'

        // populate the views
        this.init() 

        // refresh the views
        this.refresh()

        // bind actions
        document.addEventListener('kai_action', e=>{ this.action(e.detail) }, false)
        document.addEventListener('kai_viewData', e=>{ this.setViewData(e.detail) }, false)
        document.addEventListener('kai_hideView', e=>{ this.hide() }, false)
        document.addEventListener('kai_showView', e=>{ this.show() }, false)
        document.addEventListener('kai_scanResults', e=>{ this.alert(e.detail) }, false)
    }

    init(){

        // CONTAINER
        this.container = document.createElement('div')
        this.container.style.width = '60%'
        this.container.style.margin = 'auto'
        // outer drawer
        let el = document.createElement('div')
        el.style.position='absolute'
        el.style.top = '0'
        el.style.left = '0'
        el.style.width = '100%'
        el.style.maxHeight = '540px'
        el.style.zIndex = '99'
        el.style.padding = '96px 12px 22px 12px' // allow for global nav bar above.
        el.style.backgroundColor='white'
        el.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        el.appendChild(this.container)
        document.body.appendChild(el) 

        // VIEWS
        Object.keys(this.views).map( key =>{
            let view = this.views[key]
            view.el = document.createElement('div')
            view.el.innerHTML = view.template
            view.el.hidden = key !== this.currentView
            this.container.appendChild(view.el)
        })

    }

    show(){
        this.container.parentElement.hidden = false
    }

    hide(){
        this.container.parentElement.hidden = true
    }

    refresh(){
        // TOGGLE CURRENT VIEW
        Object.keys(this.views).map( key =>{
            let view = this.views[key]
            view.el.hidden = key !== this.currentView
        })
    }

    alert(list){
        this.currentView = list.length === 0 ? 'start' : 'alert' 
        let el = document.getElementById('kai_alertbox')
        el.innerHTML = list.map( o=>`<a href="javascript:document.dispatchEvent(new CustomEvent('kai_scrollToAvastar', { detail: {index:${o.index}} }))">${o.result}</a>`).join(' • ')
        this.refresh()
    }

    action(o){
        switch(o.action){
            case 'open':
                this.currentView = 'list'
                this.views.list.data.selected = this.dataManager.getKeys()[0].id
                this.renderListView()
                break
            
            case 'list_new':
                // load a new record
                this.views.edit.data.record = this.dataManager.create('Basic')

                this.currentView = 'edit'
                this.renderEditView(true) 
                break

            case 'list_edit':
                
                // load current record
                this.views.edit.data.record = this.dataManager.find(
                    document.getElementById('kai_list_select').value // selected id
                ) // should create a new copy

                this.currentView = 'edit'
                this.renderEditView(true) // init at the start
                break

            case 'list_delete':

                // delete current record
                this.dataManager.remove(
                    document.getElementById('kai_list_select').value // selected id
                )
                this.dataManager.save()

                this.currentView = 'start'
                break
            
            case 'edit_save':
                this.saveFilter()
                this.currentView = 'start'
                break

            case 'edit_cancel':
                this.currentView = 'list'
                break
            
            case 'close':
                this.currentView = 'start'
                break

            case 'toggleBox':
                this.toggleBox(o.data)
                break
        }
        this.refresh()
    }

    saveFilter(){
        let data = this.views.edit.data.record
        data.name = document.getElementById('kai_edit_name').value
        
        this.dataManager.update(data)
        this.dataManager.save()
    }

    deleteFilter(){
        // TODO
    }

    // build the select list
    renderListView(){
        let el = document.getElementById('kai_list_select')
        let keys = this.dataManager.getKeys()
        el.innerHTML = `${keys.map(o=>o.type === 'Basic' ? '<option value='+o.id+'>'+o.name+'</option>' : '').join('')}`
    }

    renderEditView(init=false){

        let data = this.views.edit.data.record
        let el = document.getElementById('kai_edit_name')
    
        // INIT FROM data
        if(init){

            el.value = data.name

            // should do data correction in the AvastarBasicMatch class **** TODO
            kai_globals.traitsList.map( trait=>{
    
                let gene = data.traits[trait].gene
                if(gene !== 'Any'){
                    // look up actual Rarity
                    let list = kai_utils.findMatching(trait,{gender:data.gender,gene:gene,series:data.series})
                    let rarity = list.length > 0 ? list[0].rarity : 'Any' // could be wrong across genders
                    data.traits[trait].rarity = rarity
                }
            })
        }

        // UPDATE BOXES TO REFLECT data
        // GENDER
        el = document.getElementById('kai_edit_gender')
        el.getElementsByTagName('span')[0].innerText = data.gender

        // SERIES
        el = document.getElementById('kai_edit_series')
        el.getElementsByTagName('span')[0].innerText = data.series

        // TRAITS
        kai_globals.traitsList.map( o=>{
            el = document.getElementById(`kai_edit_${o}`)
            let rarity = data.traits[o].rarity
            let gene = data.traits[o].gene
            el.getElementsByTagName('span')[0].innerText = `${gene} ${gene === 'Any' && rarity !== 'Any' ? rarity : ''}`
            el.style.backgroundColor = kai_globals.rarityColors[ kai_globals.rarityLevels.indexOf(rarity) ]
        })
    }

    toggleBox(id){
        let key = id.match(/^kai_edit_(.+)/) ? id.match(/^kai_edit_(.+)/)[1] : 'ERROR'
        let data = this.views.edit.data.record
        let genderList = ['Any','Female','Male']
        if(key === 'ERROR') throw('ERROR at toggleBox')

        switch(key){

            case 'gender':
                let i = genderList.indexOf(data.gender)+1
                i = i < genderList.length ? i : 0
                data.gender = genderList[i]
                break
            
            case 'series':
                data.series = data.series === 'Any' ? 0 : data.series
                data.series = data.series < 5 ? data.series+1 : 0
                data.series = data.series === 0 ? 'Any' : data.series 
                break

            default:
                // Create a new, mutable object to represent the current
                /*
                let match = { trait: trait, gender: data.gender, gene: 'Any', rarity: 'Any', series: data.series}
                data.match.map( o=>{
                    if(o.trait === trait){
                        match.gene = o.hasOwnProperty('gene') ? o.gene : 'Any'
                        match.rarity = o.hasOwnProperty('rarity') ? o.rarity : 'Any'
                    }
                })
                */
                let trait = data.traits[key]

                // ADVANCE to the next one, or wrap around to any/any
                if(trait.rarity === 'Any'){
                    // Advance to the first rarity level
                    trait.rarity = 'Common'
                }else{
                    // Advance to the first gene within this rarity level, filtered by gender (any?) and series
                    let traitList = kai_utils.findMatching(key,{gender:data.gender,rarity:trait.rarity,series:data.series})
                    let index = traitList.reduce( (prev,curr,i)=>{
                        return trait.gene === curr.name ? i : prev
                    },-1)
                    if(index === -1){
                        // should be for the case of 'Any' - so choose first
                        trait.gene = traitList[0].name
                    }else{
                        // Advance to the next rarity level, or back to start, Any Gene + Next Rarity
                        index++
                        trait.gene = index < traitList.length ? traitList[index].name : 'Any'
                        let rarityIndex = kai_globals.rarityLevels.indexOf(trait.rarity)+1
                        rarityIndex = rarityIndex < kai_globals.rarityLevels.length ? rarityIndex : 0
                        let nextRarity = kai_globals.rarityLevels[rarityIndex]
                        trait.rarity = index < traitList.length ? trait.rarity : nextRarity 
                    }
                }
        }
        this.renderEditView()
    }

    setViewData(o){
        this.views[this.currentView].data[o.key] = o.value
    }
}