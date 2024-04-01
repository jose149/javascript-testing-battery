import { describe, it, expect} from "vitest";
import { areEqual, biggest, smallest } from "../utils/comparers/numberComparer";

describe('javascript exercices',()=>{
  it('should run only javascript exercices', ()=>{
    expect(1).toBe(1)
  })

  it('gets the biggest value', ()=>{
    const firstNumber = 2, secondNumber = 3;
    expect(biggest(firstNumber,secondNumber)).toBe(secondNumber)
  })

  it('gets the smallest value', ()=>{
    const firstNumber = 2, secondNumber = 3;
    expect(smallest(firstNumber,secondNumber)).toBe(firstNumber)
  })

  it('check if both values are not equal', ()=>{
    const firstNumber = 2, secondNumber = 3;
    expect(areEqual(firstNumber,secondNumber)).toBe(false)
  })

  it('check if both values are equal', ()=>{
    const firstNumber = 3, secondNumber = 3;
    expect(areEqual(firstNumber,secondNumber)).toBe(true)
  })
})