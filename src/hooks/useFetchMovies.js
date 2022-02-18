import { useEffect, useState } from 'react';
import { MoviesService } from '../api/movie-service';

export const useFetchMovies = (keyword) => {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        if (keyword) {
            MoviesService.getSearchMovie(keyword)
            .then(data => {
                setMovies(data.films);
            });

        } else {
            MoviesService.getAllMovies()
            .then(data => {
                setMovies(data.items);
            });
        }
    }, [keyword]);

    return {movies};
}