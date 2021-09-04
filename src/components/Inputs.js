import React from 'react'
import {inputs} from '../Data'
import './style.css'

const Inputs = () => {

    return (
        <>
        <div className='inputs'>
        {inputs.map((input, index) => {
            return (
                <>
                <div key={index}>Input {index + 1}</div>
                    {input.map(product => {
                        return(
                            <div key={product.price}>
                                <p>> {product.amount} {product.isImported ? 'importet' : ''} {product.name} at {product.price}</p>
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