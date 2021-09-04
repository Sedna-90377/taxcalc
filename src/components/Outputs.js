import React from 'react';
import {inputs} from '../Data';
import {endPrice, salesTax} from '../Utils'


const Outputs = () => {

    const outputs = inputs;

    return (
        <>
        <div className='outputs'>
        {outputs.map((output, index) => {
            return (
                <>
                <div key={index}>Output {index + 1}</div>
                    {output.map(product => {
                        return(
                            <div key ={product.price}>
                                <p>> {product.amount} {product.isImported ? 'importet' : ''} {product.name} at {endPrice(product)}</p>
                            </div>
                        )})}
                <p>>Sales Taxes: {salesTax(output)}</p>
                <p>>Total: </p>
               </> 
            )
        })}
            
        </div>
        </>
    )
}


export default Outputs;