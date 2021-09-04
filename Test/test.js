
const expect = require('../node_modules/must')

const {isImport, isTaxable, taxes} = require('../src/Utils')
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


describe('roundTaxes', () => {
    it('should return 1.50', () => {
        expect(taxes(14.99, 10)).to.be.equal(1.50)
    })
    it('should return 1.85', () => {
        expect(taxes(18.33, 10)).to.be.equal(1.85)
    })
    it('should return 1.90', () => {
        expect(taxes(18.77, 10)).to.be.equal(1.90)
    })
})
