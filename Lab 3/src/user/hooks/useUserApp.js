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
  }, [getMovies])

  // Fetching

  const getMovies = useCallback(() => {
    setIsLoading(true);
    fetchMovies()
      .then((newMovies) => {
        setMovies(newMovies);
        setError(null); // Limpiar el error si la solicitud es exitosa
      })
      .catch((e) => setError(e))
      .finally(() => setIsLoading(false));
  }, [setMovies, setError, setIsLoading]);

  // Filter Movies

  const movieFilter = selectedCategory === 'All'
  ? Movies
  : Movies.filter((movie) => {
    // Si " ", pertenece a "Other"
    return selectedCategory === 'Other' ? !movie.rt_score : movie.rt_score === selectedCategory;
  });
  return (
    {
      error,
      movieFilter,
      selectedCategory,
      setSelectedCategory,
      isLoading
    }
  )
}
