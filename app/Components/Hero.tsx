import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <section >
            <h1 className='hero-title my-10'>Cardio <br /> Exercises</h1>
            <h4 className='text-dim my-10 w-1/2'>
                Boost your fitness with quick cardio bursts! From HIIT to dance, we &apos;ve got your pulse covered. Join us for a vibrant, healthier you! 💪🔥</h4>
            <a href="" className='btn bg-green-700 mr-5'> get started</a>    
            <a href="" className='btn bg-gray-400 text-white mr-5'>preview</a>
            <Image 
                height={300} 
                width={280}  
                className='
                    absolute 
                    top-64
                    mt-2
                    right-5
                    h-68 
                    w-48 
                    md:top-10
                    md:p-10
                    md:h-3/4
                    md:w-auto
                    lg:right-40' src="/images/hero.png" alt="" />
        </section>
    )
}

export default Hero