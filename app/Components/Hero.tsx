import React from 'react'

const Hero = () => {
    return (
        <section className='fadein-text hero-section pl-5 mt-20  md:px-28' >
            <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className='pt-10'>
                <h1 className='text-6xl md:text-9xl'>Cardio <br /> Exercises</h1>
                <h4 className='my-10 md:w-1/2'>
                Boost your fitness with quick cardio bursts! From HIIT to dance, we &apos;ve got your pulse covered. Join us for a vibrant, healthier you! 💪🔥</h4>
            
                <a href="#exercises" className='btn bg-green-700 mr-5'> get started</a>    
                <a href="#bmi-calculator" className='btn bg-gray-400 text-white mr-5'>preview</a>
            </div>
        </section>
    )
}

export default Hero