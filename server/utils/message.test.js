var expect = require('expect')


var {generateMessage, generateLocationMessage} = require('./message')

describe('generateMessage',()=>{
    it('should generate correct message object',()=>{
        var res = generateMessage('me','hi')
        expect(res.from).toBe('me')
        expect(res.text).toBe('hi')
        expect(typeof(res.createdAt)).toBe('number')
        
    })
})

describe('generateLocationMessage',()=>{
    it('should generate correct location object',()=>{
        var res = generateLocationMessage('me','1','2')
        expect(res.from).toBe('me')
        expect(res.url).toBe('https://www.google.com/maps?q=1,2')
        expect(typeof(res.createdAt)).toBe('number')
        
    })
})