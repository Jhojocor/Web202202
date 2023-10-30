import React from 'react'
import './Profile.css'

export function Profile () {
  return (
    <>
      <div className='container'>
        <div className='username'>
          <p>Alex Rueda</p>
        </div>
        <div className='userAvatar'>
          <img src='./src/images/Alex.jpg' alt='userAvatar' />
        </div>
      </div>
    </>
  )
}
