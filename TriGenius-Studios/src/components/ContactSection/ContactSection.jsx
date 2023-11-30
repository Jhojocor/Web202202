import React from 'react'
import './ContactSection.css'
import { Form } from '../../subcomponentes'

export function ContactSection () {
  return (
    <>
      <div className='contactSection'>
        <div className='titleSection w-[] mt-4'>
          <h2 className='text-xl sm:text-3xl font-bold'><span className='titleColor'>Contact us</span> now and let our imagination run wild <span className='titleColor'>together!</span></h2>
        </div>
        <div className='componentForm'>
          <Form />
        </div>
      </div>
    </>
  )
}
