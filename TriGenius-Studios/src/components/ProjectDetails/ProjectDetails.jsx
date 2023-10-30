import React from 'react'
import './ProjectDetails.css'
import { ActionButton } from '../../subcomponentes'

export function ProjectDetails () {
  return (
    <div className='ProjectDetails'>
      <img src='https://pbs.twimg.com/media/F9qjQroWgAAlEX1?format=jpg&name=large' />
      <section className='InfoDetails'>
        <h1>Cheetos Out Of Home Experience</h1>
        <p>The "Interactive Cheetos Flavour Exploration" project is an initiative that fuses the fun and delicious experience of tasting Cheetos with digital technology. <br />
          <br />
          Through the use of QR codes, participants have the opportunity to unlock an interactive world directly on their mobile devices.<br />
          The "Interactive Cheetos Flavour Exploration" project is a fun and innovative way for Cheetos fans to enjoy their favorite snack. It's also a great way for Frito-Lay to connect with consumers and deliver a more personalized experience.
        </p>
        <div className='PreviewDetails'>
          <img src='https://pbs.twimg.com/media/F9qtFvDWgAABtJt?format=jpg&name=4096x4096' />
          <img src='https://pbs.twimg.com/media/F9qtFvLWwAAUtbN?format=jpg&name=4096x4096' />
        </div>
        <div className='CenterA' />
        <ActionButton />
      </section>
    </div>
  )
}
