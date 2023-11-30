import React from 'react'
import './AboutStudio.css'

export function AboutStudio () {
  return (
    <>
      <div className='ContainerAboutStudio'>
        <div className='logoCard'>
          <img src='./src/images/logotipoN.png' alt='logo'/>
        </div>
        <div className='InfoStudio'>
          <div className='nameStudio'>
            <h1 className='font-semibold'>TriGenius Studios</h1>
          </div>
          <div className='description'>
            <p>
              We are a passionate team of three designers and programmers with a
              shared vision: to transform ideas into digital reality. Our
              diverse talents and skills combine to create innovative and
              elegant solutions. TriGenius Studios is more than a team; we are a
              digital family working tirelessly to create a positive impact on
              the world through code and design. Our mission is to bring your
              vision to life on screen and your success is our success.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
