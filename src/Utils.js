//check if prouct is imported
const isImport = (product) => product.isImported ? true : false;

//check if product is taxable
const isTaxable = (product) => (product.isBook || product.isFood || product.isMedical) ? false : true;

//to get the sum of an array with numbers
const reducer = (accumulator, curr) => accumulator + curr;

//get the right amount of taxes for each price
const taxes = (price, taxRate) => {
    price = price * taxRate/100
    let number = price;
    number = number.toFixed(2);
    number = Number(number.toString().charAt(number.length-1));
    if (number === 0) {
        return (Number(price.toFixed(2)))
    } else if (number < 5){
        price = (Number(price.toFixed(1)))
        return price + 0.05
    } else {
        price = (Number(price.toFixed(1)))
        return Number(price.toFixed(2))
    }
}

//get tax rate for each product
const getTaxRate = (product) => {
    if (isImport(product) && isTaxable(product)){
        return 15;
    } else if (isImport(product) && !isTaxable(product)) {
        return 5;
    }else if (isTaxable(product) && !isImport(product)) {
        return 10;
    } else return 0;
}
    
//endprice of each product
const endPrice = (product) => Number(product.price + taxes(product.price, getTaxRate(product)));

//sum of all saletaxes for each shopping basket
const salesTax = (products) => {
    let salesTax = []
    products.forEach(product => {
        salesTax.push(taxes(product.price, getTaxRate(product)))
    })
    return Number(salesTax.reduce(reducer).toFixed(2))
}

//sum of all endprices for each shopping basket
 const sum = (products) => {
    let sum = []
    products.forEach(product => sum.push(endPrice(product)));
    return Number(sum.reduce(reducer).toFixed(2))
}


module.exports = {
    isImport,
    isTaxable, 
    taxes, 
    getTaxRate, 
    endPrice,
    salesTax,
    sum
}