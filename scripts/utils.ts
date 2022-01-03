import chalk from 'chalk'

export function isHookFile(filename: string): boolean {
  const hookRegex = new RegExp('^use[A-Z][a-zA-Z]*$')
  return hookRegex.test(filename)
}

export const success = chalk.green('success')
export const info = chalk.blue('info')
export const warn = chalk.yellow('warn')
export const error = chalk.red('error')

export function camelToKebabCase(str: string): string {
  return str.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const toQueryParams = (params: Record<string, any>): string => {
  const paramsAsString = Object.entries(params)
    .filter(([_, value]) => !!value)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')
  return `?${paramsAsString}`
}