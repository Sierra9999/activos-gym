import React from 'react'

const Hero = () => {
    return (
        <section>
            <h1 className='hero-title'>Cardio <br /> Exercises</h1>
            <h4 className='text-dim'>
                Boost your fitness with quick cardio bursts! From HIIT to dance, we've got your pulse covered. Join us for a vibrant, healthier you! 💪🔥</h4>
            <a href="" className='btn green-background'> get started</a>    
            <a href="" className='btn'>preview</a>

            <div>
                <a href="" className='btn'> <span className="text-yellow">38:14</span> <br /> Time</a>
                <a href="" className='btn'><span className='text-red'>165</span> <br /> Calories</a>
            </div>
        </section>
    )
}

export default Hero