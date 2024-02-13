import React from 'react'

const PricingCard: React.FC<{
    title: string
    price: number
    children?: React.ReactNode
}> = (props) => {
    const { children, price, title } = props
    return (
        <div
            className='
                bg-green-to-black
                bg-gray-400 
                p-8
                min-h-96
                w-3/4
                sm:h-96 
                sm:w-56
                rounded-lg
                border-2
                border-green-400
                mt-6
                mr-5' >
                <h1 className='text-lg text-center relative t-0'>{title}</h1>
                <h2 className='text-4xl text-center relative t-0'>{price}/mo</h2>
            {children}
            <button className='btn bg-green-400 text-black relative left-1/2 -translate-x-1/2 top-48'>Sign me in</button>
        </div>
    )
}

export default PricingCard