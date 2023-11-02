import assert from 'assert'
import { main } from './main'

function test (): void {
  const actual = main()
  assert(actual != null)
  console.log('ok')
}

test()
