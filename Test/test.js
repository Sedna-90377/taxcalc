
const expect = require('../node_modules/must')

const {isImport, isTaxable, taxes, getTaxRate, endPrice, salesTax} = require('../src/Utils')
const {inputs} = require('../src/Data')

describe('isImport', () => {
    it('should return false', () => {
        expect(isImport(inputs[0][0])).to.be.equal(false)
    })
    it('should return true', () => {
        expect(isImport(inputs[1][1])).to.be.equal(true)
    })
})

describe('isTaxable', () => {
    it('should return false', () => {
        expect(isTaxable(inputs[0][0])).to.be.equal(false)
    })
    it('should return true', () => {
        expect(isTaxable(inputs[1][1])).to.be.equal(true)
    })
})


describe('taxes', () => {
    it('should return 1.50', () => {
        expect(taxes(14.99, 10)).to.be.equal(1.50)
    })
    it('should return 1.85', () => {
        expect(taxes(18.33, 10)).to.be.equal(1.85)
    })
    it('should return 1.90', () => {
        expect(taxes(18.77, 10)).to.be.equal(1.90)
    })
    it('should return 0.50', () => {
        expect(taxes(10.00, 5)).to.be.equal(0.50)
    })
    it('should return 2.40', () => {
        expect(taxes(47.50, 5)).to.be.equal(2.40)
    })
    it('should return 0.25', () => {
        expect(taxes(4.60, 5)).to.be.equal(0.25)
    })
    it('should return 4.20', () => {
        expect(taxes(27.99, 15)).to.be.equal(4.20)
    })
})


describe('getTaxRate', () => {
    it('should return 15', () => {
        expect(getTaxRate(inputs[2][0])).to.be.equal(15)
    })
    it('should return 10', () => {
        expect(getTaxRate(inputs[2][1])).to.be.equal(10)
    })
    it('should return 0', () => {
        expect(getTaxRate(inputs[2][2])).to.be.equal(0)
    })
    it('should return 5', () => {
        expect(getTaxRate(inputs[2][3])).to.be.equal(5)
    })
})


describe('endPrice', () => {
    it('should return 32.19', () => {
        expect(endPrice(inputs[2][0])).to.be.equal(32.19)
    })
})


describe('salesTax', () => {
    it('should return 1.5', () => {
        expect(salesTax(inputs[0])).to.be.equal(1.50)
    })
})