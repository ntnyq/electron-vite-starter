import path from 'node:path'
import { x } from 'tinyexec'
import type { Options } from 'tinyexec'

const ROOT_PATH = path.resolve(import.meta.dirname, '..')

export const resolve = (...args: string[]) => path.resolve(ROOT_PATH, ...args)

export async function runCommand(
  command: string,
  args?: string[],
  options: Partial<Options> = {},
) {
  await x(command, args, {
    ...options,
    nodeOptions: {
      cwd: ROOT_PATH,
      stdio: 'inherit',
      ...options.nodeOptions,
    },
  })
}
