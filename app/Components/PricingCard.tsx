import React from 'react'

const PricingCard:React.FC<{
    title : string
    price : number
    children ?: React.ReactNode
}> = (props) => {
    const {children,price,title} = props
  return (
    <div className='
        bg-gray-400 
        p-8 
        min-h-96 
        min-w-56
        bg-green-to-black
        rounded-lg
        border-2
        border-green-400
        mt-6
        mr-5' >
        <h1 className='text-lg relative t-0'>{title}</h1>
        <h2 className='text-lg relative t-0'>{price}</h2>
        {children}
        <button className='btn bg-green-400 text-black'>Sign me in</button>
    </div>
  )
}

export default PricingCard