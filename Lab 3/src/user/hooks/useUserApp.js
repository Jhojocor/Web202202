import { useCallback, useEffect, useContext } from 'react'
import { fetchMovies } from '../services/fetchMovies'
import { UserContext } from '../context/UserContex'

export const useUserApp = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('This component sould be within a UserContextrovider Component')
  }
  const {
    error,
      setError,
      Movies,
      setMovies,
      selectedCategory,
      setSelectedCategory,
      isLoading,
      setIsLoading
  } = context

  // Use effect

  useEffect(() => {
    console.log('useApp is running')
    getMovies()
  }, [])

  // Fetching

  const getMovies = useCallback(() => {
    fetchMovies()
      .then(newMovie => setMovies(newMovie))
      .catch(e => setError(e))
      .finally(() => setIsLoading(false))
  }, [])

  // Filter Movies

  const movieFilter = selectedCategory === 'All'
    ? Movies
    : Movies.filter(movie => {
      // Si " ", pertenece a "Other"
      return selectedCategory === 'Other' ? !movie.rt_score : movie.rt_score === selectedCategory
    })

  return (
    {
      error,
      movieFilter,
      moviesQuantity,
      selectedCategory,
      setSelectedCategory,
      isLoading
    }
  )
}
