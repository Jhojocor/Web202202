import React from 'react'
import { Header, MovieCard, Button } from '../../components'

export function DashboardPage () {
  return (
    <>
      <Header />
      <main>
        <div>
          <h1>Trending</h1>
          <Button />
        </div>
        <div>
          <h1>Find Movies</h1>
          <p>We found <b>Movies</b> for you</p>
          <MovieCard />
        </div>
      </main>
    </>
  )
}