
const expect = require('../node_modules/must')

const {isImport, isTaxable} = require('../src/Utils')
const {inputs} = require('../src/Data')

describe('isImport', () => {
    it('should return true or false', () => {
        expect(isImport(inputs[0][0])).to.be.equal(false)
    })
    it('should return true or false', () => {
        expect(isImport(inputs[1][1])).to.be.equal(true)
    })
})

describe('isTaxable', () => {
    it('should return true or false', () => {
        expect(isTaxable(inputs[0][0])).to.be.equal(true)
    })
    it('should return true or false', () => {
        expect(isTaxable(inputs[1][1])).to.be.equal(false)
    })
})

