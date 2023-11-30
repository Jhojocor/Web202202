import React from 'react'
import './Visitors.css'

export function Visitors () {
  return (
    <>
      <div className='visitor-container mt-14 sm:mt-0 font-bold'>
        <h1 className='visitor-title text-2xl sm:text-4xl'>Are you a visitor?</h1>
        <a className='visitor-hplink text-xl sm:text-3xl' href='/'>Click here</a>
        <img className='ideaImg' src='./src/images/doodlesLogIn.png' alt='visitors img' />
      </div>
    </>
  )
}
