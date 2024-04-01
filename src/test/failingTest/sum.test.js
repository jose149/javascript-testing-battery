import { expect, test, describe, it } from 'vitest'
import { sum } from './sum'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

describe('test tests', ()=>{
  describe('failing tests', ()=>{
    it('should be correct', () => {
      expect(1).toBe(1)
    })
    it('should fail', () => {
      expect(1).toBe(1)
    })
  })
})