import React from 'react';
import { useFetchMovies } from '../hooks/useFetchMovies';
import { Poster } from './Poster';

export const Content = () => {
    const {films} = useFetchMovies(null);

    return (
        <div className="content">
            {
                films && films.map(p => (
                    <Poster key={p.kinopoiskId} value={p} />
                ))
            }
        </div>
    );
}
