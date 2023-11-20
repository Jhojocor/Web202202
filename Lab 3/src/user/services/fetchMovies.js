import { movieModel } from '../models/models.js'
const BASE_URL = 'https://ghibliapi.vercel.app/films'

export const fetchMovies = async () => {
  console.log('Fetching movies...')
  return fetch(`${BASE_URL}`)
    .then(res => {
      if (!res.ok) {
        throw new Error('Error fetching data from API')
      }
      return res.json()
    })
    .then((data) => {
      const newMovie = data.map(movie => {
        const { id, title, original_title, image, movie_banner, description, director, producer, release_date, running_time, rt_score} = movie
        return new movieModel(id, title, original_title, image, movie_banner, description, director, producer, release_date, running_time, rt_score)
      })
      return newMovie
    })
    .catch((e) => {
      console.log(e)
      throw new Error(e)
    })
}
