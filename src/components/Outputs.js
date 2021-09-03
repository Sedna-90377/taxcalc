import React from 'react'
import {inputs} from '../Data'


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
                            <div key ={product.priceNetto}>
                                <p>> {product.amount} {product.isImported ? 'importet' : ''} {product.name} at {product.priceNetto}</p>
                                <p>>Sales Taxes: </p>
                                <p>>Total: </p>
                            </div>
                        )})}
               </> 
            )
        })}
            
        </div>
        </>
    )
}


export default Outputs;