import React from 'react';

export const Poster = ({value}) => {
    return (
        <div className="poster">
            <p className="poster-title">{value.nameOriginal ? value.nameOriginal : value.nameRu}</p>
            <img className="poster-image" src= {`${value.posterUrlPreview}`} alt="Film's title"/>
            <div className="poster-info">
                <span>{value.year}</span>
                <span>{value.ratingImdb ? value.ratingImdb : value.ratingKinopoisk }</span>
            </div>
        </div>
    );
}
