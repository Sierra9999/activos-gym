import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between items-center'>
        <div>workout</div>
        <nav>
          <ul className='flex justify-center items-center' >
            <li>Exercises</li>
            <li>Trainers</li>
            <li>Pricing</li>
          </ul>
        </nav>
    </header>
  )
}

export default Header