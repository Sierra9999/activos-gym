'use client'
import React from 'react'

const Modal:React.FC<{
  isOpen : boolean
  setIsOpen ?: React.Dispatch<SetStateAction<boolean>>
  children?: React.ReactNode}> = ({setIsOpen,children, isOpen = false}) => {
  return (
    <div
        onClick={()=>{
          setIsOpen? setIsOpen(false) : null
        }}
        className={`
            flex
            justify-center
            items-center
            bg-black/50
            ${ isOpen? '':'hidden'}
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