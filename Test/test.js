
const expect = require('../node_modules/must')

const {importTax} = require('../src/Utils')
const {inputs} = require('../src/Data')

describe('importTax', () => {
    it('should return 10 or 0', () => {
        expect(importTax(inputs[0][0])).to.be.equal('nothing')
    })
})
