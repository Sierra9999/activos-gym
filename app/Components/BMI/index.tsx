'use client'
import React from 'react'
import "./styles.css"
import { calculateBMI } from './calculateBMI'

const index = () => {

    const [height, setHeight] = React.useState('')
    const [weight, setWeight] = React.useState('')

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        alert(calculateBMI(Number(height),Number(weight)))
    }

    return (
        <div>
            <h1>Calculate your bmi</h1>
            <h2>why calculate your bmi s</h2>
            <form 
                className='flex flex-col' 
                onSubmit={(e)=>{handleSubmit(e)}}
                action="">
                <label htmlFor="">Height
                    <input 
                        value={height} 
                        onChange={(e)=>{
                            setHeight(e.target.value)
                        }} 
                        type="number" 
                        required />
                </label>
                <label htmlFor="">Weight
                    <input 
                        type="number" 
                        value={weight}
                        onChange={(e)=>{
                            setWeight(e.target.value)
                        }}  
                        required />
                </label>
                <button className='button'  > Calculate </button>
            </form>
        </div>
    )
}

export default index