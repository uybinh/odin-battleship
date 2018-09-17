import Ship from '../src/components/Ship'

test('Have hit() method', () => {
  expect(typeof new Ship().hit).toBe('function')
})

test('Have isShunk() method', () => {
  expect(typeof new Ship().isShunk).toBe('function')
})
