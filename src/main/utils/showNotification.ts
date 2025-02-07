import { Notification } from 'electron'
import type { NotificationConstructorOptions } from 'electron'

export function showNotification(options: NotificationConstructorOptions = {}) {
  const notification = new Notification({
    ...options,
  })

  notification.show()

  return notification
}
