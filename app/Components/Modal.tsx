'use client'
import React from 'react'

const Modal:React.FC<{children?: React.ReactNode}> = ({children}) => {
    const [visible,setVisible] = React.useState(false)
  return (
    <div 
        className={`
            flex
            justify-center
            items-center
            bg-black/50
            ${ visible? '':'hidden'}
            w-full
            h-screen
            fixed
            z-10
            top-0
            left-0`}>
        <section  className='bg-green-400 p-10 text-black'>
            {children}
        </section>
    </div>
  )
}

export default Modal