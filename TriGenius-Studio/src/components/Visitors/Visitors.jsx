import React from 'react'
import './Visitors.css'

export function Visitors () {
  return (
    <>
      <div className='visitor-container'>
        <h1 className='visitor-title'>Are you a visitor?</h1>
        <a className='visitor-hplink' href='/'>Click here</a>
        <img className='ideaImg' src='./src/images/doodlesLogIn.png' alt='visitors img' />
      </div>
    </>
  )
}
