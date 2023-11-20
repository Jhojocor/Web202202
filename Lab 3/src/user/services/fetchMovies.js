import { movieModel } from '../models/models.js';

const BASE_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=1487950471386322f9051f8bc7ac3164&language=es&page=1';

export const fetchMovies = async () => {
  console.log('Fetching movies...');

  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error('Error fetching data from API');
    }

    const data = await response.json();

    // Verifica si la propiedad 'results' está presente en la respuesta
    if (!data.results) {
      throw new Error('No results found in API response');
    }

    const newMovies = data.results.map(movie => {
      const { id, title, original_title, poster_path, backdrop_path, overview, release_date, vote_average } = movie;
      return new movieModel(id, title, original_title, poster_path, backdrop_path, overview, release_date, vote_average);
    });

    return newMovies;
  } catch (error) {
    console.error(error);
    throw new Error(error);
  }
};
