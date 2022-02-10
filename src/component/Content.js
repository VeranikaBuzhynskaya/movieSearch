import React, { useState } from 'react';
import { useFetchMovies } from '../hooks/useFetchMovies';
import { MoviesList } from './MoviesList';
import { SearchBox } from './SearchBox';
import { MoviesNotFound } from './MoviesNotFound';

export const Content = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const {movies} = useFetchMovies();

    const filteredData = movies && movies.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchTerm.toLowerCase())
    });

    return (
        <div className="content">
            <SearchBox searchTerm={searchTerm} onFilter={setSearchTerm}/>
            { filteredData && filteredData.length > 0 
                ? <MoviesList movies={filteredData}/> 
                : <MoviesNotFound/>
            }
        </div>
    );
}
