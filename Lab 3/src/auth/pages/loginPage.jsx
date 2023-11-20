import React from 'react'
import { Form } from '../components'
import { AuthContextProvider } from '../context/AuthContextProvider'
import styles from './loginPage.css'

export function LoginPage () {
  return (
      <AuthContextProvider>
        <section className={styles.Arreglo}>
          <div>
            <h1>Inicia sesión para ver tus pelis favoritas</h1>
            <p>Bienvenido al fascinante mundo ghibli</p>
            <Form />
          </div>
          <div className={styles.Arreglo2}>
            <img className='BannerArreglo' src="https://hips.hearstapps.com/hmg-prod/images/ghibli-vecino-totoro-miyazaki-netflix-1579597040.jpg"/>
          </div>
        </section>
      </AuthContextProvider>
  )
}
