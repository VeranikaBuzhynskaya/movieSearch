import { useEffect, useState } from 'react';
import { MoviesService } from '../api/movie-service';

export const useFetchMovies = () => {
    const [films, setFilms] = useState(null);

    useEffect(() => {
        MoviesService.getAllMovies()
            .then(data => {
                console.log(data.items);
                setFilms(data.items);
            });
    }, []);

    return {films};
}