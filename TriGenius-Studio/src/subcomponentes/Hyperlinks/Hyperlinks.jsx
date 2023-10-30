import { Link } from 'react-router-dom'
import React from 'react'
import './Hyperlinks.css'

export function Hyperlinks () {
  return (
    <>
      <div className='hyperlinks'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/'>Contact</Link>
      </div>
    </>
  )
}
