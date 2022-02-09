import React from 'react';
import { useEffect, useState } from 'react';
import { Poster } from './Poster';

export const Content = () => {
    const [films, setFilms] = useState(null);

    useEffect(() => {
        fetch('https://kinopoiskapiunofficial.tech/api/v2.2/films', { 
                method: 'GET',
                headers: {
                    'X-API-KEY': '1dce575a-6288-4cc1-941c-aa73df84451d',
                    'Content-Type': 'application/json',
                },
            })
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data.items);
                setFilms(data.items);
            });
    }, []);

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
