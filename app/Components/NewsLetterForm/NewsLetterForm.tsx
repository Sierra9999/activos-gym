'use client'
import React, { FormEvent } from 'react'

const NewsLetterForm = () => {

  const onSubmitHandler = async (event : FormEvent) => {
    event.preventDefault()
    console.log('submited')
    try {
      await fetch(
        'http://localhost:3000/api/emails',
        {
          method : "POST",
          body : JSON.stringify({x : "whatever"})
        }
      )
    } catch (error) {
      throw new Error("error:", error);
      
    }

  }

  return (
    <>
      <form onSubmit={(e)=>{onSubmitHandler(e)}} className='my-10 flex flex-col sm:flex-row content-center items-center'>
        <label className='w-full md:w-1/2 ' htmlFor="email">
          <input  className='w-full bg-transparent border-b-2 border-green-700 focus:outline-none caret-green h-12' type="email" id='email' />
        </label>
        <button 
          type='submit' 
          className='btn bg-green-700 mx-auto sm:mx-5 my-5 bg-green-700'>
            Make Good things happen
        </button>
      </form>
    </>
  )
}

export default NewsLetterForm