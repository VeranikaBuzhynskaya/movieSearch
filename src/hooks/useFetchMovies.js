import { useEffect, useState } from 'react';
import { MoviesService } from '../api/movie-service';

export const useFetchMovies = () => {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        MoviesService.getAllMovies()
            .then(data => {
                setMovies(data.items);
            });
    }, []);

    return {movies};
}