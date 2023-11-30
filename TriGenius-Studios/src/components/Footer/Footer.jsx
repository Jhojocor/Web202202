import React from 'react'
import './Footer.css'

export function Footer () {
  return (
    <>
      <footer id='containerfooter' className='w-full flex flex-col text-center sm:flex-row'>
        <div id='Logo' className='w-20 sm:w-24  m-2'>
          <img src='./src/images/logotipoB.png' alt='Trigenius Logo' />
        </div>
        <div className='Copyright m-2'>
          <p>© 2023 TriGenius Studios</p>
        </div>
        <div className='Social m-5'>
          <a href='#'>
            <img src='./src/images/iconFacebook.png' alt='SocialFacebook' />
          </a>
          <a href='#'>
            <img src='./src/images/iconTwiter.png' alt='SocialTwiter' />
          </a>
          <a href='#'>
            <img src='./src/images/iconYoutube.png' alt='SocialYoutube' />
          </a>
          <a href='#'>
            <img src='./src/images/iconInstagram.png' alt='SocialInstagram' />
          </a>
        </div>
      </footer>
    </>
  )
}
