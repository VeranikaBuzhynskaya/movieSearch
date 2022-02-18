import React, { useState } from 'react';
import { useFetchMovies } from '../hooks/useFetchMovies';
import { Content } from '../component/Content';

export const MainPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const {movies} = useFetchMovies(searchTerm);

    return (
        <Content searchTerm={searchTerm} onFilter={setSearchTerm} movies={movies}/>
    );
}