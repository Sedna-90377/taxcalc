import React from 'react';
import {inputs} from '../Data';

const {endPrice, salesTax, sum} = require('../Utils')
const Outputs = () => {

    const outputs = inputs;

    return (
        <>
        <h1>OUTPUTS</h1>
        <div className='outputs'>
        {outputs.map((output, index) => {
            return (
                <div className="baskets">
                <div>Output {index + 1}</div>
                    {output.map(product => {
                        return(
                            <div>
                                <p>> {product.amount} {product.isImported ? 'importet' : ''} {product.name} at {endPrice(product).toFixed(2)}</p>
                            </div>
                        )})}
                    <div className="summary">
                        <p>> Sales Taxes: {salesTax(output).toFixed(2)}</p>
                        <p>> Total: {sum(output)}</p>

                    </div>
                
               </div> 
            )
        })}
            
        </div>
        </>
    )
}


export default Outputs;