import React, { useState } from 'react'
import './FormLogIn.css'
import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export function FormLogIn() {
  const navigate = useNavigate()
  const auth = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  console.log(email, password)
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await auth.login(email, password)
      setLoginError(null)
      navigate('/dashboard')
    } catch (error) {
      alert('Ups, there is an error triying logging your info')
    }
  }
  return (
    <>
      <div className='containerLogIn'>
        <h1 className='text-2xl sm:text-4xl'><span className='span-title'>Admin,</span> <br />Sign in to Access
        </h1>
        <div className='inputsLogIn'>
          <div className='inputEmailLI'>
            <label htmlFor='email'>Email</label>
            <input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='ej. admin@email.com' className='inputFormLI' id='email' />
          </div>
          <div className='inputPasswordLI'>
            <label htmlFor='password'>Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' className='inputFormLI' id='password' />
            <label className='remind-text' htmlFor='password'>Forgot your password? <a className='remind-hplink' href='#'>remind me</a></label>
          </div>
        </div>
        <div className='error-message'>{loginError}</div>
        <div className='ContainerBtn'>
          <button onClick={(e) => handleLogin(e)}>Sign in</button>
        </div>
      </div>
    </>
  )
}
