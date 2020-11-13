//
// Event >> Update Data >> Render View
// 
class kai_ViewManager {

    constructor(dataManager){

        // expandable view container
        this.container = null 

        // data manager (AvastarScanList)
        this.dataManager = dataManager

        // views for the container
        this.views = { 
            start : {
                // populate with the dom element
                el : null,
                // inner html template
                template : `
                <h4 id="kai_start_header">Welcome ...</h4>
                <div><b>Avastar Bounty Hunter v0.3.4</b> - <a href="https://opensea.io/collection/s-rank-bounty-hunter-badges" target="_blank"><span id="kai_support_message">Show your support</span></a></div>
                <div><span id="kai_logCount">0</span> Avastars scanned</div>
                <div>
                    <button onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'nav_edit'} }))">Edit Bounties</button>
                    <button onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'nav_list'} }))">View results</button>
                </div>
                `,
                // data for this view
                data : {
                    srank: false // check for s-rank
                },
                init : ()=>{

                     // Check for S-Rank & define listener
                     if(window.hasOwnProperty('ethereum') && ethereum !== undefined){
                        this.views.menu.data.srank = this.views.menu.data.srank || ( kai_srank(String(ethereum.selectedAddress).toLowerCase()) )
                        ethereum.on('accountsChanged', ()=>{
                            this.views.start.init()
                            this.views.start.render()
                        })
                     }
                     

                    console.log('Start: Init')
                },
                update : ()=>{
                    
                    // do nothing
                    console.log('Start: Update')
                },
                // render function to refresh this view with data
                render : ()=>{ 

                    // Update welcome message
                    let el = document.getElementById('kai_start_header')
                    el.innerText = this.views.menu.data.srank ? 'Welcome S-Rank Hunter' : 'Unregistered Novice Hunter: D-Rank'

                    el = document.getElementById('kai_support_message')
                    el.innerText = this.views.menu.data.srank ? 'Thank you!' : 'Show your support'

                    // update count of scanned avastars
                    el = document.getElementById('kai_logCount')
                    el.innerText = Number(JSON.parse(localStorage.getItem('kai_logData')).count).toLocaleString('en')
                    console.log('Start: It renders.') 
                }
            },
            menu : {
                el : null,
                template : `
                <div><a href="#" onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'nav_home'} }))">Home</a> » My Bounties</div>
                <h4>Edit Bounties</h4>
                <div style="float:left;margin-right:32px;height:120px">
                    <div>
                        <select id='kai_filter_select'>
                        </select>
                    </div>
                    <div>
                        <button onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'menu_edit'} }))">Edit</button>
                        <button onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'menu_delete'} }))">Delete</button>
                    </div>
                </div>
                <div>
                    <button onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'menu_new_basic'} }))">New By Traits</button><br/>
                    <button onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'menu_new_score'} }))">New By High Score</button><br/>
                    <button onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'menu_new_rarity'} }))">New By Rarity Count</button>
                </div>
                `,
                data : {
                    selected : null, // a filter id
                    list : null, // a list of { id:...,name:....,type:...} objects
                },
                // data functions
                // init - on loading the view
                init : ()=>{ 
                    
                    let keys = this.dataManager.getKeys() // filters - reduced set
                    //this.views.menu.data.list = this.dataManager.getKeys() // filters

                    
                    // init select list - exclude exotic types
                    this.views.menu.data.list = keys.reduce( (prev,curr)=>{
                        if(curr.type === 'Basic' || curr.type === 'Score' || curr.type === 'RarityCount'){
                            prev.push( {
                                id: curr.id,
                                name: curr.name,
                                type:curr.type
                            })
                        }
                        return prev
                    },[])

                    // define selected as first in the list
                    this.views.menu.data.selected = this.views.menu.data.list.length > 0 ? this.views.menu.data.list[0].id : null

                    console.log('Menu: Init')
                    
                },
                // update the data with any changes since init - call before getting data
                update : ()=>{
                    let elSelect = document.getElementById('kai_filter_select') // needs to be rendered after init
                    this.views.menu.data.selected = elSelect.value

                },
                // refresh any UI elements
                render : ()=>{
                    let elSelect = document.getElementById('kai_filter_select')
                    elSelect.innerHTML = `${this.views.menu.data.list.map(o=>'<option value='+o.id+'>'+o.name+'</option>').join('')}`
                    console.log('Menu: It renders.')

                    
                }
            },
            edit_basic : {
                el : null,
                template : `
                <div>This is the edit_basic filter panel</div>

                <input id="kai_edit_basic_name" type="text" value="" removed_onblur="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'edit_basic_name', data:this.id} }))"></input>
                Find up to: <select id="kai_edit_basic_maxOverallRarity">
                    <option value='Legendary'>Legendary</option>
                    <option value='Epic'>Epic</option>
                    <option value='Rare'>Rare</option>
                    <option value='Uncommon'>Uncommon</option>
                    <option value='Common'>Common</option>
                </select>
                <input id="kai_edit_basic_isActive" type='checkbox' /> active
                <div>
                    <div id='kai_edit_basic_gender' class='box' onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'toggleBox', data:this.id} }))"><label>Gender</label><br/><span>Any</span></div>
                    <div id='kai_edit_basic_series' class='box' onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'toggleBox', data:this.id} }))"><label>Series</label><br/><span>Any</span></div>
                    <div id='kai_edit_basic_skinTone' class='box' onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'toggleBox', data:this.id} }))"><label>Skin Tone</label><br/><span>Any</span></div>
                    <div id='kai_edit_basic_hairColor' class='box' onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'toggleBox', data:this.id} }))"><label>Hair Color</label><br/><span>Any</span></div>
                    <div id='kai_edit_basic_eyeColor' class='box' onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'toggleBox', data:this.id} }))"><label>Eye Color</label><br/><span>Any</span></div>
                    <div id='kai_edit_basic_backgroundColor' class='box' onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'toggleBox', data:this.id} }))"><label>Background Color</label><br/><span>Any</span></div>
                    <div id='kai_edit_basic_backdrop' class='box' onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'toggleBox', data:this.id} }))"><label>Backdrop</label><br/><span>Any</span></div>
                    <div id='kai_edit_basic_ears' class='box' onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'toggleBox', data:this.id} }))"><label>Ears</label><br/><span>Any</span></div>
                    <div id='kai_edit_basic_face' class='box' onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'toggleBox', data:this.id} }))"><label>Face</label><br/><span>Any</span></div>
                    <div id='kai_edit_basic_nose' class='box' onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'toggleBox', data:this.id} }))"><label>Nose</label><br/><span>Any</span></div>
                    <div id='kai_edit_basic_mouth' class='box' onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'toggleBox', data:this.id} }))"><label>Mouth</label><br/><span>Any</span></div>
                    <div id='kai_edit_basic_facialFeature' class='box' onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'toggleBox', data:this.id} }))"><label>Facial Feature</label><br/><span>Any</span></div>
                    <div id='kai_edit_basic_eyes' class='box' onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'toggleBox', data:this.id} }))"><label>Eyes</label><br/><span>Any</span></div>
                    <div id='kai_edit_basic_hairStyle' class='box' onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'toggleBox', data:this.id} }))"><label>Hair Style</label><br/><span>Any</span></div>
                </div>
                <div>
                    <button onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'edit_save'} }))">Save</button>
                    <button onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'edit_cancel'} }))">Cancel</button>
                </div>
                `,
                data : {
                    recordID: null,
                    record: null // current data record when being edited

                },
                init : ()=>{
                    // load current record by recordID - or create a new one
                    this.views.edit_basic.data.record = this.views.edit_basic.data.recordID ? 
                        this.dataManager.find( this.views.edit_basic.data.recordID ) : // should create a local copy
                        this.dataManager.create('Basic')
                    
                    let record = this.views.edit_basic.data.record
                    // 
                    kai_globals.traitsList.map( trait=>{
                        // should do data correction in the AvastarBasicMatch class 
                        let gene = record.traits[trait].gene
                        if(gene !== 'Any'){
                            // look up actual Rarity - Record will have default valued otherwise
                            let list = kai_utils.findMatching(trait,{gender:record.gender,gene:gene,series:record.series})
                            let rarity = list.length > 0 ? list[0].rarity : 'Any' // could be wrong across genders
                            record.traits[trait].rarity = rarity
                        }
                    })

                    console.log('Edit Basic: Init')
                },
                update : ()=>{
                    // set NAME data from the input field
                    let elName = document.getElementById('kai_edit_basic_name') 
                    if(this.views.edit_basic.data.record.hasOwnProperty('name')){ this.views.edit_basic.data.record.name = elName.value }
                    console.log('Edit Basic: Update')

                    // set maxOverallRarityData from select
                    let elSelect = document.getElementById('kai_edit_basic_maxOverallRarity')
                    if(this.views.edit_basic.data.record.hasOwnProperty('maxOverallRarity')){ this.views.edit_basic.data.record.maxOverallRarity = elSelect.value }
                
                    // set active from checkbox
                    let elActive = document.getElementById('kai_edit_basic_isActive')
                    if(this.views.edit_basic.data.record.hasOwnProperty('active')){ this.views.edit_basic.data.record.active = elActive.checked }
                
                },
                render : ()=>{
                    let record = this.views.edit_basic.data.record

                    // set name field in the UI
                    let el = document.getElementById('kai_edit_basic_name')
                    el.value = record.name // make sure to keep this in sync via .update()

                    // set correct select item
                    el = document.getElementById('kai_edit_basic_maxOverallRarity')
                    el.value = record.maxOverallRarity

                    // active status on/off
                    el = document.getElementById('kai_edit_basic_isActive')
                    el.checked = record.active

                    // UPDATE BOXES TO REFLECT data
                    // GENDER
                    el = document.getElementById('kai_edit_basic_gender')
                    el.getElementsByTagName('span')[0].innerText = record.gender

                    // SERIES
                    el = document.getElementById('kai_edit_basic_series')
                    el.getElementsByTagName('span')[0].innerText = record.series

                    // TRAITS
                    kai_globals.traitsList.map( o=>{
                        el = document.getElementById(`kai_edit_basic_${o}`)
                        let rarity = record.traits[o].rarity
                        let gene = record.traits[o].gene
                        el.getElementsByTagName('span')[0].innerText = `${gene} ${gene === 'Any' && rarity !== 'Any' ? rarity : ''}`
                        el.style.backgroundColor = kai_globals.rarityColors[ kai_globals.rarityLevels.indexOf(rarity) ]
                    })
                }
            },
            edit_score : {
                // populate with the dom element
                el : null,
                // inner html template
                template : `
                <div><b>Edit High Score Filter</b></div>

                <div>
                    <input id="kai_edit_score_name" type="hidden" value=""></input>
                    Find Scores <input id="kai_edit_score_max" type="number" value=""></input> & above<br/>
                </div>
                
                <div>
                    <button onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'edit_save'} }))">Save</button>
                    <button onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'edit_cancel'} }))">Cancel</button>
                </div>
                `,
                // data for this view
                data : {
                    recordID: null,
                    record: null
                },
                init : ()=>{
                    // load current record by recordID - or create a new one
                    this.views.edit_score.data.record = this.views.edit_score.data.recordID ? 
                        this.dataManager.find( this.views.edit_score.data.recordID ) : // should create a local copy
                        this.dataManager.create('Score')
                    
                    console.log('Edit Score: Init')
                },
                update : ()=>{
                    // set NAME data from the input field
                    let elName = document.getElementById('kai_edit_score_name') 
                    // auto generate name - below
                    //if(this.views.edit_score.data.record.hasOwnProperty('name')){ this.views.edit_score.data.record.name = elName.value }
                    
                    // set MAX (n) data from the input field
                    let elMax = document.getElementById('kai_edit_score_max') 
                    if(this.views.edit_score.data.record.hasOwnProperty('n')){ this.views.edit_score.data.record.n = elMax.value }

                    // Automatic name
                    this.views.edit_score.data.record.name = `High Score: ${elMax.value}`

                    console.log('Edit Score: Update')
                },
                // render function to refresh this view with data
                render : ()=>{ 
                    let record = this.views.edit_score.data.record

                    // NAME will be hidden
                    let el = document.getElementById('kai_edit_score_name')
                    el.value = record.name // make sure to keep this in sync via .update()

                    // UPDATE BOXES TO REFLECT data
                    // MAX
                    el = document.getElementById('kai_edit_score_max')
                    el.value = record.n // make sure to keep this in sync via .update()

                    console.log('Edit Score: It renders.') 
                }
            },
            edit_rarity : {
                // populate with the dom element
                el : null,
                // inner html template
                template : `
                <div><b>Edit Rarity Count</b></div>

                <div>
                    <input id="kai_edit_rarity_name" type="hidden" value=""></input>
                    <input id="kai_edit_rarity_min" type="number" value=""></input>x 
                    <select id="kai_edit_rarity_select">
                        <option>Common</option>
                        <option>Uncommon</option>
                        <option>Rare</option>
                        <option>Epic</option>
                        <option>Legendary</option>
                    </select>
                    Find up to: <select id="kai_edit_rarity_maxOverallRarity">
                        <option value='Legendary'>Legendary</option>
                        <option value='Epic'>Epic</option>
                        <option value='Rare'>Rare</option>
                        <option value='Uncommon'>Uncommon</option>
                        <option value='Common'>Common</option>
                    </select>
                </div>
                
                <div>
                    <button onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'edit_save'} }))">Save</button>
                    <button onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'edit_cancel'} }))">Cancel</button>
                </div>
                `,
                // data for this view
                data : {
                    recordID: null,
                    record: null
                },
                init : ()=>{
                    // load current record by recordID - or create a new one
                    this.views.edit_rarity.data.record = this.views.edit_rarity.data.recordID ? 
                    this.dataManager.find( this.views.edit_rarity.data.recordID ) : // should create a local copy
                    this.dataManager.create('RarityCount')
                     
                    console.log('Edit Rarity Count: Init')
                },
                update : ()=>{

                    // set NAME data from the input field
                    //let elName = document.getElementById('kai_edit_rarity_name') 
                    //if(this.views.edit_rarity.data.record.hasOwnProperty('name')){ this.views.edit_rarity.data.record.name = elName.value }

                    // set MIN rarity count (n) data from the input field
                    let elMin = document.getElementById('kai_edit_rarity_min') 
                    if(this.views.edit_rarity.data.record.hasOwnProperty('n')){ this.views.edit_rarity.data.record.n = elMin.value }

                    // set RARITY data from the select menu
                    let elSelect = document.getElementById('kai_edit_rarity_select') 
                    if(this.views.edit_rarity.data.record.hasOwnProperty('rarity')){ this.views.edit_rarity.data.record.rarity = elSelect.value }

                    // automatic NAME setting
                    this.views.edit_rarity.data.record.name = `${elMin.value}x ${elSelect.value}`

                    // set maxOverallRarityData from select
                    elSelect = document.getElementById('kai_edit_rarity_maxOverallRarity')
                    if(this.views.edit_rarity.data.record.hasOwnProperty('maxOverallRarity')){ this.views.edit_rarity.data.record.maxOverallRarity = elSelect.value }
                
                    
                    console.log('Edit Rarity Count: Update')
                },
                // render function to refresh this view with data
                render : ()=>{ 
                    let record = this.views.edit_rarity.data.record

                    // UPDATE fields TO REFLECT data
                    let el = document.getElementById('kai_edit_rarity_name')
                    el.value = record.name // make sure to keep this in sync via .update()
                    
                    // COUNT
                    el = document.getElementById('kai_edit_rarity_min')
                    el.value = record.n 

                    // RARITY
                    el = document.getElementById('kai_edit_rarity_select')
                    el.value = record.rarity 

                    // MAX OVERALL RARITY
                    el = document.getElementById('kai_edit_rarity_maxOverallRarity')
                    el.value = record.maxOverallRarity 

                    console.log('Edit Rarity Count: It renders.') 
                }
            },
            alert : {
                el : null,
                template : `
                <div><a href="#" onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'nav_home'} }))">Home</a> » My Results</div>
                <h4>Found matching Avastars</h4>
                <div id='kai_alertbox'></div>
                <div onclick="document.dispatchEvent(new CustomEvent('kai_action', { detail: {action:'nav_edit'} }))"><button>Edit Bounties</button></div>
                `,
                data : {},
                init : ()=>{
                    // to do 
                },
                update : ()=>{
                    // to do 
                },
                render : ()=>{ console.log('Alert: It renders.') }
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
        ////document.addEventListener('kai_viewData', e=>{ this.setViewData(e.detail) }, false)
        //document.addEventListener('kai_hideView', e=>{ this.hide() }, false)
        //document.addEventListener('kai_showView', e=>{ this.show() }, false)
        document.addEventListener('kai_scanResults', e=>{ this.alert(e.detail) }, false)
    }

// BUSINESS LOGIC & ROUTING

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
        //el.style.maxHeight = '540px'
        el.style.zIndex = '99'
        el.style.padding = '96px 12px 22px 12px' // allow for global nav bar above.
        el.style.backgroundColor='white'
        el.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        el.appendChild(this.container)
        document.body.appendChild(el) 

        // View/hide toggle button
        el = document.createElement('div')
        el.style.position='absolute'
        el.style.top = '96px'
        el.style.left = '16px'
        el.style.width = '32px'
        el.style.height = '32px'
        el.style.zIndex = '9999'
        el.style.backgroundColor='rgba(0,0,0,0.4)'
        el.style.backgroundImage="url('https://kaigani.github.io/avastars-bounty-hunter/kai_drol_32x32.png')"
        el.style.border = '1px'
        el.style.borderStyle = 'solid'
        el.style.borderColor = kai_globals.rarityColors[1]
        //el.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        el.onclick = this.toggleHidden.bind(this)
        document.body.appendChild(el)

        // VIEWS
        Object.keys(this.views).map( key =>{
            let view = this.views[key]
            view.el = document.createElement('div')
            view.el.innerHTML = view.template
            view.el.hidden = key !== this.currentView
            this.container.appendChild(view.el)
        })

        this.views[this.currentView].init()

    }

    toggleHidden(){
        this.container.parentElement.hidden = !this.container.parentElement.hidden 
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
            if(key === this.currentView){
                view.el.hidden = false
                view.render()
            }else{
                view.el.hidden = true
            }
        })
    }

    alert(list){
        this.currentView = list.length === 0 ? 'start' : 'alert' 
        let el = document.getElementById('kai_alertbox')
        el.innerHTML = list.map( o=>`<a href="javascript:document.dispatchEvent(new CustomEvent('kai_scrollToAvastar', { detail: {index:${o.index}} }))">${o.result}</a>`).join(' • ')
        this.refresh()
    }

    action(o){

        // Update the current view data
        this.views[this.currentView].update()

        switch(o.action){
            case 'nav_edit':
                this.currentView = 'menu'
                this.views[this.currentView].init()
                //this.views.menu.data.selected = this.dataManager.getKeys()[0].id
                //this.renderMenuView()
                //this.views.menu.render() // TODO **** can we render all views by default?
                break

            case 'nav_list':
                this.currentView = 'alert'
                this.views[this.currentView].init()
                break

            case 'menu_new_basic':
                
                // load a new record
                // this.views.edit.data.record = this.dataManager.create('Basic')
                this.views.edit_basic.data.recordID = null // will create a new record

                this.currentView = 'edit_basic'
                this.views[this.currentView].init()
                //this.renderEditView(true) 
                //this.views.edit.render(true) // TODO *** render all views
                break

            case 'menu_new_score':
                
                this.views.edit_score.data.recordID = null // will create a new record

                this.currentView = 'edit_score'
                this.views[this.currentView].init()
                break

            case 'menu_new_rarity':
            
                this.views.edit_rarity.data.recordID = null // will create a new record

                this.currentView = 'edit_rarity'
                this.views[this.currentView].init()
                break

            case 'menu_edit':
                
                //this.views.menu.update() // set data for the current view

                // choose the edit view by type
                let filterType = this.views.menu.data.list.reduce((prev,curr)=>{
                    prev = curr.id === this.views.menu.data.selected ? curr.type : prev
                    return prev
                },'Default')

                switch(filterType){
                    case 'Basic':
                        this.currentView = 'edit_basic'
                        this.views.edit_basic.data.recordID = this.views.menu.data.selected
                        break
                    case 'Score':
                        this.currentView = 'edit_score'
                        this.views.edit_score.data.recordID = this.views.menu.data.selected
                        break
                    case 'RarityCount':
                        this.currentView = 'edit_rarity'
                        this.views.edit_rarity.data.recordID = this.views.menu.data.selected
                        break
                    // default won't change the current view
                }
            
                //this.currentView = 'edit'
                this.views[this.currentView].init()
                //this.renderEditView(true) // init at the start
                //this.views.edit.render(true) // TODO *** MOVE TO RENDER ALL
                break

            case 'menu_delete':

                // delete current record
                this.dataManager.remove(
                    document.getElementById('kai_filter_select').value // selected id
                )
                this.dataManager.save()

                this.currentView = 'start'
                this.views[this.currentView].init()
                break
            
            case 'edit_save':
                //this.saveFilter()
                // assume current view is 'edit_basic','edit_score' or 'edit_rarity'
                this.dataManager.update(this.views[this.currentView].data.record)
                this.dataManager.save()
        
                this.currentView = 'start'
                this.views[this.currentView].init()
                break

            case 'edit_cancel':
                this.currentView = 'menu'
                //this.views[this.currentView].init()
                break
            
            case 'nav_home':
            case 'close':
                this.currentView = 'start'
                this.views[this.currentView].init()
                break

            case 'toggleBox':
                this.toggleBox(o.data)
                break
        }
        this.refresh()
    }

    saveFilter(){
        let record = this.views.edit.data.record
        //record.name = document.getElementById('kai_edit_name').value // done via update
        
        
    }

    deleteFilter(){
        // TODO
    }

//
// RENDER FUNCTIONS
//
    // build the select filter list
    /*
    renderMenuView(){
        let el = document.getElementById('kai_filter_select')
        let keys = this.dataManager.getKeys()
        el.innerHTML = `${keys.map(o=>o.type === 'Basic' ? '<option value='+o.id+'>'+o.name+'</option>' : '').join('')}`
    }*/

    renderEditView(init=false){

        let record = this.views[this.currentView].data.record
        let el = document.getElementById('kai_edit_name')
    
        el.value = record.name // make sure to keep this in sync via .update()

        // UPDATE BOXES TO REFLECT data
        // GENDER
        el = document.getElementById('kai_edit_gender')
        el.getElementsByTagName('span')[0].innerText = record.gender

        // SERIES
        el = document.getElementById('kai_edit_series')
        el.getElementsByTagName('span')[0].innerText = record.series

        // TRAITS
        kai_globals.traitsList.map( o=>{
            el = document.getElementById(`kai_edit_${o}`)
            let rarity = record.traits[o].rarity
            let gene = record.traits[o].gene
            el.getElementsByTagName('span')[0].innerText = `${gene} ${gene === 'Any' && rarity !== 'Any' ? rarity : ''}`
            el.style.backgroundColor = kai_globals.rarityColors[ kai_globals.rarityLevels.indexOf(rarity) ]
        })
    }

    toggleBox(id){
        let key = id.match(/^.+_(.+)$/) ? id.match(/^.+_(.+)$/)[1] : 'ERROR'
        let record = this.views[this.currentView].data.record
        let genderList = ['Any','Female','Male']
        if(key === 'ERROR') throw('ERROR at toggleBox')

        switch(key){

            case 'gender':
                let i = genderList.indexOf(record.gender)+1
                i = i < genderList.length ? i : 0
                record.gender = genderList[i]
                break
            
            case 'series':
                record.series = record.series === 'Any' ? 0 : record.series
                record.series = record.series < 5 ? record.series+1 : 0
                record.series = record.series === 0 ? 'Any' : record.series 
                break

            default:
                // Create a new, mutable object to represent the current
                /*
                let match = { trait: trait, gender: record.gender, gene: 'Any', rarity: 'Any', series: record.series}
                record.match.map( o=>{
                    if(o.trait === trait){
                        match.gene = o.hasOwnProperty('gene') ? o.gene : 'Any'
                        match.rarity = o.hasOwnProperty('rarity') ? o.rarity : 'Any'
                    }
                })
                */
                let trait = record.traits[key]

                // ADVANCE to the next one, or wrap around to any/any
                if(trait.rarity === 'Any'){
                    // Advance to the first rarity level
                    trait.rarity = 'Common'
                }else{
                    // Advance to the first gene within this rarity level, filtered by gender (any?) and series
                    let traitList = kai_utils.findMatching(key,{gender:record.gender,rarity:trait.rarity,series:record.series})
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
        //this.renderEditView() // deprecated
    }

    setViewData(o){
        this.views[this.currentView].data[o.key] = o.value
    }
}