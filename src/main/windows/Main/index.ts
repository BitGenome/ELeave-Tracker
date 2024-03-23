import { BrowserWindow, app } from 'electron'
import path, { join } from 'path'

import { ENVIRONMENT } from 'shared/constants'
import { createWindow } from 'main/factories'
import { displayName } from '~/package.json'

const iconPath = path.join(app.getAppPath(), 'resources/build/icons/icon.png')

export async function MainWindow() {
  const window = createWindow({
    id: 'main',
    title: displayName,
    width: 700,
    height: 473,
    show: false,
    center: true,
    movable: true,
    resizable: false,
    alwaysOnTop: true,
    autoHideMenuBar: true,
    icon: iconPath,

    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
    },
  })

  /**
   * Make the windows maximizable
   */
  window.maximizable = true

  /**
   * Defualt to maximize window
   */
  window.maximize()

  window.webContents.on('did-finish-load', () => {
    if (ENVIRONMENT.IS_DEV) {
      window.webContents.openDevTools({ mode: 'detach' })
    }

    window.show()
  })

  window.on('close', () =>
    BrowserWindow.getAllWindows().forEach((window) => window.destroy())
  )

  return window
}
