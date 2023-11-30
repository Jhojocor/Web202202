import React from 'react'
import './AddProject.css'
import { useNavigate } from 'react-router-dom'

export function AddProject () {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/create')
  }
  return (
    <div className='AddProject' onClick={handleClick}>
      <img src='https://pbs.twimg.com/media/F9pu5FGXAAA9TDh?format=png&name=large' alt='Create project' />
      <h3>Create project</h3>
    </div>
  )
}
