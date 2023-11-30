import React from 'react'
import { FormLogIn } from '../../subcomponentes'
import { Visitors } from '../../components'
import './LoginPage.css'

export function LoginPage () {
  return (
    <>
      <div className='LogInPage p-8 sm:px-16'>
        <img className='logo-logIn w-20 sm:w-32 ' src='./src/images/logotipoN.png' alt='logo TriGenius' />
        <div className='grid-LogIn flex flex-col-reverse sm:flex-row sm:mt-14'>
          <div className='sm:w-1/2'>
            <Visitors />
          </div>
          <div className='sm:w-1/2'>
            <FormLogIn />
          </div>
        </div>
      </div>
    </>
  )
}
