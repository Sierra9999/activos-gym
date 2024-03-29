import React from 'react'
import NewsLetterForm from './NewsLetterForm'

const News = () => {
    return (
        <section className='flex flex-col align-center my-10'>
            <h1 className='text-5xl my-5 md:w-3/4 leading-snug'>Grab your towel and dig into the grind</h1>
            <p className='mt-5 md:w-1/2'>Join our newsletter for exclusive fitness tips, special offers, and community updates. 🌟 Stay in the loop with the latest trends and events at our gym. 💪 Let&apos;s embark on this fitness journey together! 🚀</p>
            <NewsLetterForm></NewsLetterForm>
        </section>
    )
}

export default News