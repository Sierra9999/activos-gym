'use client'
import React, { FormEvent } from 'react'
import Modal from '../Modal'

const NewsLetterForm = () => {
  const [email, setEmail] = React.useState<string>('')

  const onSubmitHandler = async (event : FormEvent) => {
    event.preventDefault()
    console.log()
    const request = await fetch('http://localhost:3000/api/emails', {method : 'POST', body : JSON.stringify(email)})

    if (!request.ok) {
      throw new Error("🫵 are a 🤡");
    }else{
      console.log(await request.json())
    }
    
  }

  return (
    <>
      <form 
        onSubmit={(e)=>{onSubmitHandler(e)}} 
        className='my-10 flex flex-col sm:flex-row content-center items-center'>
        <label className='w-full text-2xl text-green-400 flex justify-center items-center md:w-1/2' htmlFor="email">Email:
          <input 
            className='w-full bg-transparent border-b-2 border-green-700 focus:outline-none caret-green h-12' 
            type="email" 
            id='email'
            required
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
              console.log(email)
            }}
            />
        </label>

        <button 
          className='btn bg-green-700 mx-auto sm:mx-5 my-5 bg-green-700'>
            Make Good things happen
        </button>
        <Modal><h1>🫵🤡 are a 🤡</h1></Modal>
      </form>
    </>
  )
}

export default NewsLetterForm