
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
    



module.exports = {
    isImport,
    isTaxable, 
    taxes, 
    getTaxRate
}