export class MoviesService {
    static url = 'https://kinopoiskapiunofficial.tech/api/v2.2/films';
    static apiKey = process.env.REACT_APP_API_KEY;
  
    static getAllMovies() {
        return fetch(`${this.url}`, { 
            method: 'GET',
            headers: {
                'X-API-KEY': `${this.apiKey}`,
                'Content-Type': 'application/json',
            },
        })
        .then(res => res.json())
        .catch((error) => console.error(`${error.name} - ${error.message}`))
    }
}