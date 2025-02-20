import process from 'node:process'
import { electronApp, optimizer } from '@electron-toolkit/utils'
import { app, ipcMain, Menu } from 'electron'
import { createAppMenu } from './menu'
// import { isAccessibilityGranted } from './utils'
import {
  createMainWindow,
  // createPanelWindow,
  // createSetupWindow,
  // makePanelWindowClosable,
  WINDOWS,
} from './window'

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId(__APP_ID__)

  // const accessibilityGranted = isAccessibilityGranted()

  Menu.setApplicationMenu(createAppMenu())

  // if (accessibilityGranted) {
  createMainWindow({})
  // } else {
  //   createSetupWindow()
  // }

  // createPanelWindow()

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  // IPC test
  ipcMain.on('ping', () => console.log('pong'))

  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (WINDOWS.size === 0) {
      createMainWindow()
    }
    // if (accessibilityGranted) {
    //   if (!WINDOWS.get('main')) {
    //     createMainWindow()
    //   }
    // } else {
    //   if (!WINDOWS.get('setup')) {
    //     createSetupWindow()
    //   }
    // }
  })

  // app.on('before-quit', () => {
  //   makePanelWindowClosable()
  // })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
