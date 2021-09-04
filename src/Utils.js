
const isImport = (product) => product.isImported ? true : false;

const isTaxable = (product) => (product.isBook || product.isFood || product.isMedical) ? false : true;

const taxes = (price, taxRate) => {
    price = price * taxRate/100
    let number = price;
    number = number.toFixed(2);
    number = number.toString().charAt(number.length-1);
    number = Number(number)
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

const getTaxRate = (product) => {
    if (isImport(product) && isTaxable(product)){
        return 15;
    } else if (isImport(product) && !isTaxable(product)) {
        return 5;
    }else if (isTaxable(product) && !isImport(product)) {
        return 10;
    } else return 0;
}
    
export const endPrice = (product) => Number((product.price + taxes(product.price, getTaxRate(product))).toFixed(2));


export const salesTax = (products) => {
    let salesTax = []
    const reducer = (accumulator, curr) => accumulator + curr;
    products.forEach(product => {
        salesTax.push(taxes(product.price, getTaxRate(product)))
    })
    console.log(salesTax)
    return Number(salesTax.reduce(reducer)).toFixed(2)
}



// module.exports = {
//     isImport,
//     isTaxable, 
//     taxes, 
//     getTaxRate, 
//     endPrice, 
//     salesTax
// }