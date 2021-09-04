
const isImport = (product) => product.isImported ? true : false;

const isTaxable = (product) => (product.isBook || product.isFood || product.isMedical) ? true : false;


module.exports = {
    isImport,
    isTaxable
}