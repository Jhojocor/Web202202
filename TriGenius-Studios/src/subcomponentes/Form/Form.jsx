import React from 'react'
import './Form.css'

export function Form () {
  return (
    <>
      <div className='containerMain'>
        <div className='containerInputs'>
          <div className='inputName'>
            <input type='text' placeholder='Name' className='inputForm' />
          </div>
          <div className='inputEmail'>
            <input type='text' placeholder='Email' className='inputForm' />
          </div>
          <div className='inputMessage'>
            <input type='text' placeholder='Message' className='inputForm' />
          </div>
        </div>
        <div className='ContainerBtn'>
          <button>Send</button>
        </div>
      </div>
    </>
  )
}
