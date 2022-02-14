import React, { useState } from 'react';
import { useFetchMovies } from '../hooks/useFetchMovies';
import { Content } from '../component/Content';

export const MainPage = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const {movies} = useFetchMovies();

    const filteredData = movies && movies.filter((item) => {
        return Object.values(item).join('').toLowerCase().includes(searchTerm.toLowerCase())
    });

    return (
        <Content searchTerm={searchTerm} onFilter={setSearchTerm} movies={filteredData}/>
    );
}