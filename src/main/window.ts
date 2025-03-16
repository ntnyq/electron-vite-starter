import path from 'node:path'
import process from 'node:process'
import { getRendererHandlers } from '@egoist/tipc/main'
import { app, BrowserWindow, screen, shell } from 'electron'
import { configStore } from './config'
import type { BrowserWindowConstructorOptions } from 'electron'

import type { RendererHandlers } from './renderer-handlers'

export const resolve = (...args: string[]) =>
  path.resolve(__dirname, '..', ...args)

type WindowId = 'main' | 'panel' | 'setup'

export const WINDOWS = new Map<WindowId, BrowserWindow>()

function createBaseWindow({
  id,
  url,
  showWhenReady = true,
  windowOptions,
}: {
  id: WindowId
  url?: string
  showWhenReady?: boolean
  windowOptions?: BrowserWindowConstructorOptions
}) {
  const window = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...windowOptions,
    webPreferences: {
      preload: resolve('./preload/index.js'),
      sandbox: false,
      ...windowOptions?.webPreferences,
    },
  })

  WINDOWS.set(id, window)

  if (showWhenReady) {
    window.on('ready-to-show', () => {
      window.show()
    })
  }

  window.on('close', () => {
    console.log('close', id)
    WINDOWS.delete(id)
  })

  window.webContents.setWindowOpenHandler(details => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  const baseUrl = import.meta.env.PROD
    ? 'assets://app'
    : process.env.ELECTRON_RENDERER_URL

  window.loadURL(`${baseUrl}${url || ''}`)

  return window
}

export function createMainWindow({ url }: { url?: string } = {}) {
  const window = createBaseWindow({
    id: 'main',
    url,
    showWhenReady: true,
    windowOptions: {
      titleBarStyle: 'hiddenInset',
    },
  })

  if (__IS_MAC__) {
    window.on('close', () => {
      if (configStore.get().hideDockIcon) {
        app.setActivationPolicy('accessory')
        app.dock?.hide()
      }
    })

    window.on('show', () => {
      if (configStore.get().hideDockIcon && !app.dock?.isVisible()) {
        app.dock?.show()
      }
    })
  }

  return window
}

export function showMainWindow(url?: string) {
  const window = WINDOWS.get('main')

  if (window) {
    window.show()

    if (url) {
      //
    }
  } else {
    createMainWindow({ url })
  }
}

export function createSetupWindow() {
  const window = createBaseWindow({
    id: 'setup',
    url: '/setup',
    windowOptions: {
      titleBarStyle: 'hiddenInset',
      width: 800,
      height: 600,
      resizable: false,
    },
  })
  return window
}

const panelWindowSize = {
  width: 260,
  height: 50,
}

function getPanelWindowPosition() {
  const currentScreen = screen.getDisplayNearestPoint(
    screen.getCursorScreenPoint(),
  )
  const screenSize = currentScreen.workArea
  const position = {
    x:
      Math.floor(screenSize.x + (screenSize.width - panelWindowSize.width))
      - 10,
    y: screenSize.y + 10,
  }

  return position
}

export function createPanelWindow() {
  const position = getPanelWindowPosition()
  const window = createBaseWindow({
    id: 'panel',
    url: '/panel',
    showWhenReady: false,
    windowOptions: {
      hiddenInMissionControl: true,
      skipTaskbar: true,
      closable: false,
      maximizable: false,
      frame: false,
      // transparent: true,
      // hasShadow: false,
      paintWhenInitiallyHidden: true,
      width: panelWindowSize.width,
      height: panelWindowSize.height,
      maxWidth: panelWindowSize.width,
      maxHeight: panelWindowSize.height,
      minWidth: panelWindowSize.width,
      minHeight: panelWindowSize.height,
      visualEffectState: 'active',
      vibrancy: 'under-window',
      alwaysOnTop: true,
      x: position.x,
      y: position.y,
    },
  })

  window.on('hide', () => {
    getRendererHandlers<RendererHandlers>(window.webContents).startSayHi.send()
  })

  // makePanel(window)

  return window
}

export function showPanelWindow() {
  const window = WINDOWS.get('panel')
  if (window) {
    const position = getPanelWindowPosition()
    window?.setPosition(position.x, position.y)
    window.showInactive()
    // makeKeyWindow(window)
  }
}

export function showPanelWindowAndStartDoSomething() {
  showPanelWindow()
  getWindowRendererHandlers('panel')?.startSayHi.send()
}

export function makePanelWindowClosable() {
  const window = WINDOWS.get('panel')

  if (window && !window.isClosable()) {
    // makeWindow(window)
    window.setClosable(true)
  }
}

export function getWindowRendererHandlers(id: WindowId) {
  const window = WINDOWS.get(id)
  if (!window) return
  return getRendererHandlers<RendererHandlers>(window.webContents)
}

export function stopDoSomethingAndHidePanelWindow() {
  const window = WINDOWS.get('panel')

  if (window) {
    getRendererHandlers<RendererHandlers>(window.webContents).stopSayHi.send()

    if (window.isVisible()) {
      window.hide()
    }
  }
}
