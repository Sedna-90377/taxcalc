import React from 'react'
import {inputs} from '../Data'
import './style.css'

const Inputs = () => {

   
    console.log(inputs)

    return (
        <>
        <div className='inputs'>
        {inputs.map((input, index) => {
            return (
                <>
                <div key={index}>Input {index + 1}</div>
                    {input.map(product => {
                        return(
                            <div key={product.priceNetto}>
                                <p>> {product.amount} {product.isImported ? 'importet' : ''} {product.name} at {product.priceNetto}</p>
                            </div>
                        )})}
               </> 
            )
        })}
            
        </div>
        </>
    )
}


export default Inputs;