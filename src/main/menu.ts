import { Menu } from 'electron'
import type { MenuItemConstructorOptions } from 'electron'

export function createAppMenu() {
  const template: MenuItemConstructorOptions[] = []

  return Menu.buildFromTemplate(template)
}
