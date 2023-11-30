import React from 'react'
import './PageNotFound.css'

export function PageNotFound () {
  return (
    <>
      <div id='PageNotFound' className='flex flex-col sm:flex-row-reverse sm:justify-center sm:items-center'>
        <img src='./src/images/Illustration404.png' alt='Page not found' className='sm:w-1/2' />
        <div className='m-2.5 sm:w-1/2 sm:px-28'>
          <h1 className='text-center font-extrabold text-4xl sm:text-5xl sm:text-left' id='title'>So sorry!</h1>
          <h2 className='text-center font-bold text-2xl sm:text-3xl sm:text-left'>The page you are looking for cannot be found</h2>
          <div className='reasons'>
            <p className='text-left font-semibold text-lg sm:xl sm:text-left'>Possible reasons:</p>
            <ul className='reasonsList'>
              <li>The address may have been typed incorrectly.</li>
              <li>It may be a broken or outdated link.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
