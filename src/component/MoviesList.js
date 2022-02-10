import React from 'react';
import { Poster } from './Poster';

export const MoviesList = ({movies}) => {
    return (
        <div className="movies-content">
            {
                movies && movies.map(p => (
                    <Poster key={p.kinopoiskId} value={p} />
                ))
            }
        </div>
    );
}