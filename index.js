const express = require("express")
const application = express()

// to fix stuff
application.use(require('body-parser').json())
application.use(require('body-parser').urlencoded({ extended: true }))

const fs = require("fs")

const PORT = process.env.PORT || 6923

// ui
const { app, BrowserWindow, Notification, ipcMain, nativeTheme, Menu, MenuItem, shell } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 1060,
        height: 600,
        webPreferences: {

        }
    })
    win.loadFile("./pages/index.html")
}
app.whenReady().then(createWindow)

fs.readdir('./Backend/Main', (err, files) => {
    files.forEach(file => {
      require("./Backend/Main/" + file)(application, fs)
    })
});
/*
application.use(function(req, res) {
    res.status(404)
    res.json({"status": "404", "error": "Looks like the page what you are currently trying to access is currently down or not available"})
});
*/

application.listen(PORT, () => {
    console.log("Server is connected on port", PORT)
})