import { Profile, Hyperlinks, MenuHamburg } from '../../subcomponentes'
import React from 'react'
import './Nav.css'

export function Nav() {
  return (
    <>
      <nav className='containerNav items-center'>
        <div className='Logo'>
          <a href='/'>
            <img src='./src/images/logotipoB.png' alt='Trigenius Logo' />
          </a>
        </div>
        <Hyperlinks />
        <div className='menuHamburg text-5xl py-10px z-10'>
          <MenuHamburg />
        </div>
        <div className='userProfile'>
          <Profile />
        </div>
      </nav>
    </>
  )
}
