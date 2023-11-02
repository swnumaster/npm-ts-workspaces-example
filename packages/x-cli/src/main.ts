import { awesomeFn } from '@quramy/x-core'

export function main (): string {
  // dependencies across child packages
  const out = awesomeFn()
  return out
}
