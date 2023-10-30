import React from 'react'
import { FormLogIn } from '../../subcomponentes'
import { Visitors } from '../../components'
import './LoginPage.css'

export function LoginPage () {
  return (
    <>
      <div className='LogInPage'>
        <img className='logo-logIn' src='./src/images/LogoTextBlack.png' alt='logo TriGenius' />
        <div className='grid-LogIn'>
          <Visitors />
          <FormLogIn />
        </div>
      </div>
    </>
  )
}
