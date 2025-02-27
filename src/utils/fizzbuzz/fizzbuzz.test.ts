import {fizzbuzz} from './fizzbuzz'

describe('fizzbuzz', ()=>{

    it('should throw if not number is provided as parameter', ()=>{
        expect(()=> fizzbuzz()).toThrow()
    })
    it('should throw if text error not defined', ()=>{
        expect(()=> fizzbuzz()).toThrow('Number not defined')
    })
    it('should throw if number parameter as not equal type number', ()=>{
        expect(()=> fizzbuzz(NaN)).toThrow('parameter is NaN')
    })
    it('should return 1 if number provider is 1', ()=>{
        expect(fizzbuzz(1)).toBe(1)
    })
    it('should return fizzbuzz if number provider is multiply 3 and 5', ()=>{
        expect(fizzbuzz(15)).toBe('fizzbuzz')
        expect(fizzbuzz(30)).toBe('fizzbuzz')

    })
    it('should return fizz if number provider is multiply 3', ()=>{
        expect(fizzbuzz(3)).toBe('fizz')
        expect(fizzbuzz(6)).toBe('fizz')
        expect(fizzbuzz(9)).toBe('fizz')
    })
    it('should return buzz if number provider is multiply 5', ()=>{
        expect(fizzbuzz(10)).toBe('buzz')
        expect(fizzbuzz(20)).toBe('buzz')
    })

    it('should return buzz if number provider is multiply 7', ()=>{
        expect(fizzbuzz(7)).toBe('woof')
    })

})