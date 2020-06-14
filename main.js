const { app, BrowserWindow } = require('electron')

let win

function createWindow () {
  // Cria uma janela de navegação.
  win = new BrowserWindow({
    minWidth: 1100,
    minHeight: 500,
    width: 1100,
    height: 600,
    autoHideMenuBar: true,
    darkTheme: true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // e carregar o index.html do aplicativo.
  win.loadFile('./src/index.html')
}


app.whenReady()
  .then(createWindow)

  // Quit when all windows are closed.
app.on('window-all-closed', () => {
  // No macOS é comum para aplicativos e sua barra de menu 
  // permaneçam ativo até que o usuário explicitamente encerre com Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
