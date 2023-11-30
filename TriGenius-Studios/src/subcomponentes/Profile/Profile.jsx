import React, { useState } from 'react'
import './Profile.css'

export function Profile() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <>
      <div className='container' onClick={toggleDropdown}>
        <div className='username'>
          <p>Alex Rueda</p>
        </div>
        <div className='userAvatar'>
          <img src='./src/images/AlexCircle.png' alt='userAvatar' />
        </div>
        {showDropdown && (
          <div className='dropdownContent'>
            <button className="btnLogOut">Log out</button>
          </div>
        )}
      </div>
    </>
  )
}
