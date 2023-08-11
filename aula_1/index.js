const {app, BrowserWindow} = require('electron')

let JanelaPrincipal

app.on('ready',()=>{

    JanelaPrincipal = new BrowserWindow ({



    })

    JanelaPrincipal.loadURL(`file://${__dirname}/index.html`)

});