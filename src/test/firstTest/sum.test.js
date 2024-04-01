import { expect, test, describe, it } from 'vitest'
import { sum } from './sum'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

describe('test tests', ()=>{
  describe('skip tests', ()=>{
    it.skip('skipped test sum 2 + 2 = 4', () => {
      expect(sum(2, 2)).toBe(4)
    })
    it('runned test sum 2 + 3 = 5', () => {
      expect(sum(2, 3)).toBe(5)
    })
  })
  describe('run only some tests', ()=>{
    it.only('run only test sum 2 + 2 = 4', () => {
      expect(sum(2, 2)).toBe(4)
    })
    it('should skip test sum 2 + 3 = 5', () => {
      expect(sum(2, 3)).toBe(5)
    })
  })
})