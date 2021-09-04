import React from 'react';
import {inputs} from '../Data';

const {endPrice, salesTax, sum} = require('../Utils')
const Outputs = () => {

    const outputs = inputs;

    return (
        <div style={{backgroundColor: 'bisque', padding: '.5rem'}} >
        <h3>### OUTPUTS</h3>
        <div className='outputs'>
        {outputs.map((output, index) => {
            return (
                <div className="baskets">
                <div>Output {index + 1}</div>
                    {output.map(product => {
                        return(
                            <div>
                                <p>> {product.amount} {product.isImported ? 'importet' : ''} {product.name}: {endPrice(product).toFixed(2)}</p>
                            </div>
                        )})}
                    __________________________________
                    <div className="summary">
                        <p>> Sales Taxes: {salesTax(output).toFixed(2)}</p>
                        <p>> Total: {sum(output)}</p>

                    </div>
                
               </div> 
            )
        })}
            
        </div>
        </div>
    )
}


export default Outputs;