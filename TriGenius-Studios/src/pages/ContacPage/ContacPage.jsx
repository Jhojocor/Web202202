import React from 'react'
import './ContacPage.css'
import { Nav, ContactSection, Footer } from '../../components'

export function ContacPage () {
  return (
    <>
      <section>
        <Nav />
        <section id='contactPage'>
          <ContactSection />
        </section>
      </section>
      <Footer />
    </>
  )
}
