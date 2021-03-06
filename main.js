const electron = require('electron');

const {
    app,
    BrowserWindow,
} = electron;
let win;

function createWindow() {
    // Create the browser window.
    win = new BrowserWindow({
        width: 1000,
        height: 800,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: false,
        },
        icon: './icon.png',
    });

    // and load the index.html of the app.

    win.loadURL('https://wx.qq.com');

    // Open the DevTools.
    // win.webContents.openDevTools()

    // Emitted when the window is closed.
    win.on('close', () => {
        try {
            app.exit(0);
        } catch (e) {
            win = null;
        }
    });
    win.on('closed', () => {
       // Dereference the window object, usually you would store windows
       // in an array if your app supports multi windows, this is the time
       // when you should delete the corresponding element.
        win = null;
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    app.quit();
});

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow();
    }
});
