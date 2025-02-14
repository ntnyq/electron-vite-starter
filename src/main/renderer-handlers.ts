import type { UpdateDownloadedEvent } from 'electron-updater'

export type RendererHandlers = {
  startSayHi: () => void
  stopSayHi: () => void

  updateAvailabel: (evt: UpdateDownloadedEvent) => void
  navigate: (url: string) => void
}
