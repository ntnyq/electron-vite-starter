import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { app } from 'electron'
import type { Config } from '@shared/types'

export const APP_DATA_FOLDER = path.join(app.getPath('appData'), __APP_ID__)

export const CONFIG_JSON_PATH = path.join(APP_DATA_FOLDER, 'config.json')

function getConfig() {
  try {
    return JSON.parse(readFileSync(CONFIG_JSON_PATH, 'utf-8')) as Config
  } catch {
    return {}
  }
}

class ConfigStore {
  config: Config | undefined

  constructor() {
    this.config = getConfig()
  }

  get() {
    return this.config || {}
  }

  save(config: Config) {
    this.config = config
    mkdirSync(APP_DATA_FOLDER, { recursive: true })
    writeFileSync(CONFIG_JSON_PATH, JSON.stringify(config))
  }
}

export const configStore = new ConfigStore()
