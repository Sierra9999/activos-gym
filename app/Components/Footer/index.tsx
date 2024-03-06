import React from 'react'
import SocialIcons from '../SocialIcons'
const Footer = () => {
    return (
        <footer className='lg:mx-10 lg:px-20 px-5 py-20 flex flex-col md:flex-row min-h-48'>
            <section className="md:w-1/3">
                <h1>Activos Gym</h1>
                Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.
                <SocialIcons />
            </section>
            <div className='flex md:w-1/2  '>
                <section className='md:pl-5 flex-1' >
                    <h3 className="text-bottom-accent">Our classes <span ></span></h3>
                    <h5>Power-Yoga</h5>
                    <h5>Fitness Classes</h5>
                    <h5>Aerobics Classes</h5>
                    <h5>Cross-Fit</h5>
                </section>
                <section className='flex-1'>
                    <h3 className='text-bottom-accent'>working hours</h3>
                    <strong>Monday - Friday</strong>
                    <p>7:00 AM - 9:00 PM</p>
                    <strong>Saturday</strong>
                    <p>7:00 AM - 7:00 PM</p>
                    <strong>Sunday</strong>
                    <p>Closed</p>
                </section>
            </div>
        </footer>
    )
}

export default Footer