import React from 'react'
import './ProjectDetails.css'
import { ActionButton } from '../../subcomponentes'

export function ProjectDetails() {
  return (
    <section className="containerProjecdetails">
      <div className='ProjectDetails'>
        <section className='containerImgProject'>
          <div className='imgProject'>
            <img src='https://pbs.twimg.com/media/F9qjQroWgAAlEX1?format=jpg&name=large' alt='Imagen del proyecto' />
          </div>
        </section>
        <section className='InfoDetails'>
          <div className='details'>
            <div className="title">
              <h1>Cheetos Out Of Home Experience</h1>
            </div>
            <div className="description">
              <p>The "Interactive Cheetos Flavour Exploration" project is an initiative that fuses the fun and delicious experience of tasting Cheetos with digital technology. Through the use of QR codes, participants have the opportunity to unlock an interactive world directly on their mobile devices. The "Interactive Cheetos Flavour Exploration" project is a fun and innovative way for Cheetos fans to enjoy their favorite snack. It's also a great way for Frito-Lay to connect with consumers and deliver a more personalized experience.</p>
            </div>
            <div className='PreviewDetails'>
              <div className="imgPreview">
                <img src='https://pbs.twimg.com/media/F9qtFvDWgAABtJt?format=jpg&name=4096x4096' alt='Preview 1' />
                <img src='https://pbs.twimg.com/media/F9qtFvLWwAAUtbN?format=jpg&name=4096x4096' alt='Preview 2' />
              </div>
            </div>
          </div>
          <div className='CenterA'></div>
          <ActionButton />
        </section>
      </div>
    </section>
  );
}
