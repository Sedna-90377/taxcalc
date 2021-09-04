import React from 'react';
import {inputs} from '../Data';

const {endPrice, salesTax, sum} = require('../Utils')
const Outputs = () => {

    const outputs = inputs;

    return (
        <>
        <div className='outputs'>
        {outputs.map((output, index) => {
            return (
                <>
                <div>Output {index + 1}</div>
                    {output.map(product => {
                        return(
                            <div>
                                <p>> {product.amount} {product.isImported ? 'importet' : ''} {product.name} at {endPrice(product).toFixed(2)}</p>
                            </div>
                        )})}
                <p>>Sales Taxes: {salesTax(output)}</p>
                <p>>Total: {sum(output)}</p>
               </> 
            )
        })}
            
        </div>
        </>
    )
}


export default Outputs;