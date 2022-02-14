import React from 'react';
import { MoviesList } from './MoviesList';
import { SearchBox } from './SearchBox';
import { MoviesNotFound } from './MoviesNotFound';

export const Content = ({searchTerm, onFilter, movies}) => {
    return (
        <div className="content">
            <SearchBox searchTerm={searchTerm} onFilter={onFilter}/>
            { movies && movies.length > 0 
                ? <MoviesList movies={movies}/> 
                : <MoviesNotFound/>
            }
        </div>
    );
}
