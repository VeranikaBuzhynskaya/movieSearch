import React from 'react';
import { Link } from 'react-router-dom'

export const Poster = ({value}) => {
    return (
        <div className="poster">
            <p className="poster-title">{value.nameOriginal ? value.nameOriginal : value.nameRu}</p>
            <Link to={`/move/${value.kinopoiskId ? value.kinopoiskId : value.filmId}`}>
                <img className="poster-image" src= {`${value.posterUrlPreview}`} alt="Film's title"/>
            </Link>
            <div className="poster-info">
                <span>{value.year}</span>
                <span>{value.ratingImdb ? value.ratingImdb : value.ratingKinopoisk }</span>
            </div>
        </div>
    );
}
