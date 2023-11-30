import React from 'react'
import './Form.css'

export function Form () {
  return (
    <>
      <div className='containerMain w-screen items-center pt-2'>
        <div className='containerInputs w-5/6 sm:w-1/2'>
          <div className='inputName'>
            <input type='text' placeholder='Name' className='inputForm w-full' />
          </div>
          <div className='inputEmail'>
            <input type='text' placeholder='Email' className='inputForm w-full' />
          </div>
          <div className='inputMessage'>
            <input type='text' placeholder='Message' className='inputForm w-full' />
          </div>
        </div>
        <div className='ContainerBtn font-semibold'>
          <button>Send</button>
        </div>
      </div>
    </>
  )
}
