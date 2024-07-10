import path from 'node:path'
import { URL, fileURLToPath } from 'node:url'
import { execa } from 'execa'
import type { Options } from 'execa'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const rootPath = path.resolve(__dirname, '..')

export const resolve = (...args: string[]) => path.resolve(rootPath, ...args)

const execaOptions: Options = {
  cwd: rootPath,
  stdio: 'inherit',
}

export async function runCommand(...args: string[]) {
  await execa(args[0], args.slice(1), execaOptions)
}
