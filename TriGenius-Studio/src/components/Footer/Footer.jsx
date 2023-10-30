import React from 'react'
import './Footer.css'

export function Footer () {
  return (
    <>
      <footer className='containerfooter'>
        <div className='Logo'>
          <img src='./src/images/LogoText.png' alt='Trigenius Logo' />
        </div>
        <div className='Copyright'>
          <p>© 2023 TriGenius Studios</p>
        </div>
        <div className='Social'>
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
