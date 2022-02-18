import React from 'react';
import { useParams } from "react-router-dom";
import { useFetchMovieInfo } from '../hooks/useFetchMovieInfo';
import { MovieDescription } from '../component/MovieDescription';

export const MoviePage = () => {
    const params = useParams();
    const {movie} = useFetchMovieInfo(params.id);
    
    return (
        <MovieDescription movie = {movie}/>
    );
}