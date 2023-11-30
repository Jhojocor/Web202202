import React from 'react'
import './Banner.css'

export function Banner () {
  return (
    <div id='Banner' className='flex w-screen h-28 sm:h-screen sm:items-center'>
      <div className='w-3/5 z-10'>
        <h1 className='text-left text-[40px] font-black leading-relaxed h-full z-10 pl-9 sm:pl-24 sm:text-6xl sm:leading-normal sm:font-extrabold'>Programming, designing and creating a future together</h1>
      </div>
      <div id='gif-big' className='w-1/2 h-full' />
      <div id='gradient-overlay' className='w-full h-screen' />
    </div>
  )
}
