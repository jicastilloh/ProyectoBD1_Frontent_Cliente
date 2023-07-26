// app, que controla el ciclo de vida de los eventos de su aplicación.
// BrowserWindow, que crea y administra ventanas de aplicaciones.

/*
Muchos de los módulos principales de Electron son emisores de eventos de Node.js que se adhieren a la arquitectura asíncrona basada en eventos de Node. El módulo de la aplicación es uno de estos emisores.

En Electron, BrowserWindows solo se puede crear después de que se active el evento listo del módulo de la aplicación. Puede esperar este evento usando la API app.whenReady() y llamando a createWindow() una vez que se cumpla su promesa.
*/

const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})