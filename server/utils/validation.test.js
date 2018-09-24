const expect = require('expect')
const {isRealString} = require('./validation')

describe('isRealString',()=>{
    it('should reject non-string values',()=>{
        var testValue=9
        expect(isRealString(testValue)).toBe(false)
    })
    it('should reject string with only spaces',()=>{
        var testValue='   '
        expect(isRealString(testValue)).toBe(false)
    })
    it('should reject string with only spaces',()=>{
        var testValue='test value'
        expect(isRealString(testValue)).toBe(true)
    })
})