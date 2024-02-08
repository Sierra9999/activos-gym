import React from 'react'

const NewsLetterForm = () => {
  return (
    <div className='my-10'>
      <h1 className='text-5xl my-5 md:w-3/4 leading-snug'>Grab your towel and dig into the grind</h1>
      <p className='mt-5 md:w-1/2'>Join our newsletter for exclusive fitness tips, special offers, and community updates. 🌟 Stay in the loop with the latest trends and events at our gym. 💪 Let's embark on this fitness journey together! 🚀</p>

      <form className='my-10 flex flex-col sm:flex-row content-center items-center'>
        <label className='w-full md:w-1/2 h-2' htmlFor="email">
          <input  className='w-full bg-transparent border-b-2 border-green-700 focus:outline-none caret-green' type="email" id='email' />
        </label>
        <button className='btn bg-green-700 mx-auto sm:mx-5 my-5 bg-green-700'>Make Good things happen</button>
      </form>
    </div>
  )
}

export default NewsLetterForm