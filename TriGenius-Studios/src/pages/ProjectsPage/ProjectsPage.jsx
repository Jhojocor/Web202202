import React from 'react'
import './ProjectsPage.css'
import { Nav, FeaturedSection, Footer } from '../../components'

export function ProjectsPage () {
  return (
    <>
      <section>
        <Nav />
        <div className='FeaturedTittle'>
          <h2 className='SmallTittle'>Our</h2>
          <h2 className='BigTittle'>Projects</h2>
        </div>
        <FeaturedSection />
      </section>
      <Footer />
    </>
  )
}
