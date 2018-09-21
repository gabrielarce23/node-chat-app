var expect = require('expect')

var {generateMessage} = require('./message')

describe('generateMessage',()=>{
    it('should generate correct message object',()=>{
        var res = generateMessage('me','hi')
        expect(res.from).toBe('me')
        expect(res.text).toBe('hi')
        expect(typeof(res.createdAt)).toBe('number')
        
    })
})