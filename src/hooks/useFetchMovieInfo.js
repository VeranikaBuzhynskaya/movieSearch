import { useEffect, useState } from 'react';
import { MoviesService } from '../api/movie-service';

export const useFetchMovieInfo = (id) => {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        MoviesService.getMovieInfo(id)
        .then(data => {
            setMovie(data);
        });
    }, [id]);

    return {movie};
}