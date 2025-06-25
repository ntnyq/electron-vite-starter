import process from 'node:process'
import { systemPreferences } from 'electron'

export function isAccessibilityGranted() {
  if (process.platform === 'win32') {
    return true
  }

  return systemPreferences.isTrustedAccessibilityClient(false)
}
