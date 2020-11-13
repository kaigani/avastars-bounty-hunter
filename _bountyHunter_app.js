// v0.1x 
((window)=>{

    //const URL_PREFIX = "http://localhost:3030" 
    const URL_PREFIX = "https://cdn.jsdelivr.net/gh/kaigani/avastars-bounty-hunter"
    const VERSION = "fcc52cc52bbc7c02685f009cced3d8db982a2ad9"

    function loadScript(url) {
        return new Promise(function (resolve, reject) {
          let script = document.createElement('script')
      
          script.async = true
          script.src = `${url}?${Date.now()}` // refresh cached version
      
          // trigger fulfilled state when script is ready
          script.onload = resolve
      
          // trigger rejected state when script is not found
          script.onerror = reject
      
          document.head.appendChild(script)
        })
    }

    function loadStyles(url) {
        return new Promise(function (resolve, reject) {
          let link = document.createElement('link')
      
          link.rel = 'stylesheet'
          link.href = url
      
          // trigger fulfilled state when stylesheet is ready
          link.onload = resolve
      
          // trigger rejected state when stylesheet is not found
          link.onerror = reject
      
          document.head.appendChild(link)
        })
      }

      if(!window.bountyHunterHasLoaded){
        // LOAD CLASSES
        Promise.all([

            // CSS
            loadStyles(`${URL_PREFIX}@${VERSION}/kai_styles.min.css`),

            // kai_globals
            loadScript(`${URL_PREFIX}@${VERSION}/kai_globals.min.js`), 
            loadScript(`${URL_PREFIX}@${VERSION}/kai_xDC.min.js`), 
            loadScript(`${URL_PREFIX}@${VERSION}/kai_srank.js`), 

            // avastarTraits - data
            loadScript(`${URL_PREFIX}@${VERSION}/avastar-traits.min.js`), 

            // kai_utils - utility functions
            loadScript(`${URL_PREFIX}@${VERSION}/kai_utils.min.js`),
            
            // kai_ViewManager
            loadScript(`${URL_PREFIX}@${VERSION}/kai_ViewManager.min.js`),

            // AvastarScan - core app
            loadScript(`${URL_PREFIX}@${VERSION}/kai_AvastarScanList.min.js`),
            loadScript(`${URL_PREFIX}@${VERSION}/kai_AvastarScan.min.js`)

        ]).then(initApp)

      window.bountyHunterHasLoaded = true
    }

    function initApp(){

        //kai_utils.enableConsole()

        // WAIT UNTIL NAV LOADED
        if(document.getElementsByClassName('nav')[0]){
          let app = new kai_AvastarScan(document)
          let vm = new kai_ViewManager(app.avastarScanList) // avastarScanList as data manager
        }else{
          setTimeout(initApp, 1000)
        }
    }

})(window)