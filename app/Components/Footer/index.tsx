import React from 'react'

const Footer = () => {
    return (
        <section className='py-20 min-h-48 flex justify-between'>
            <section className="flex-1">
                Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.
            </section>
            <section className='flex-1 pl-5' >       
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
        </section>
    )
}

export default Footer