import React from 'react'
import './Dashboard.css'
import { Nav, FeaturedSection, Footer } from '../../components'

export function Dashboard () {
  return (
    <>
      <section>
        <Nav />
        <div className='FeaturedTittle font-semibold text-5xl sm:text-8xl'>
          <h2 className='SmallTittle'>My</h2>
          <h2 className='BigTittle'>Projects</h2>
        </div>
        <FeaturedSection />
      </section>
      <Footer />
    </>
  )
}
