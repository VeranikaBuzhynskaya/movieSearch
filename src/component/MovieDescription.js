import React from 'react';

export const MovieDescription = ({movie}) =>{
    return (
        <div className="move-description-part">
            {movie && <>
                <img className="poster-image" src={`${movie && movie.posterUrl}`} alt="poster"/>
                <div className="description-part">
                    <h2>{movie.nameOriginal ? movie.nameOriginal : movie.nameRu}</h2>
                    <div className="runtime-and-release-year">
                        <span>{movie.year}</span>
                        <span>{movie.filmLength} min</span>
                    </div>
                    <p className="description"> {movie.description}</p>
                    <span className="raiting">Raiting: {movie.ratingKinopoisk}</span>
                </div>
            </>}
        </div>
    );
}
