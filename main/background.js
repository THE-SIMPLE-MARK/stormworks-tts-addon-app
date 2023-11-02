import path from 'path'
import { app, ipcMain } from 'electron'
import serve from 'electron-serve'
import { createWindow } from './helpers'

const isProduction = process.env.NODE_ENV === 'production'

if (isProduction) {
  serve({ directory: 'app' })
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`)
}

await app.whenReady()

const mainWindow = createWindow('main', {
  width: 500,
  height: 700,
  resizable: false,
  fullscreenable: false,
  autoHideMenuBar: true,
  webPreferences: {
    preload: path.join(__dirname, 'preload.js'),
  },
})

if (isProduction) {
  await mainWindow.loadURL('app://./home')
} else {
  const port = process.argv[2]
  await mainWindow.loadURL(`http://localhost:${port}/home`)
}

app.on('window-all-closed', () => {
  app.quit()
})

ipcMain.on('message', async (event, arg) => {
  event.reply('message', `${arg} World!`)
})
