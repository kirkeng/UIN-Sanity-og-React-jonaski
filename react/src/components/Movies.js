import { useState } from 'react';
import { getMovies } from "../utils/movieService.js";
import Movie from './Movie.js';

const Movies = () => {
    const [data, setData] = useState([]);
    
    const handleClick = async () => {
        const movies = await getMovies();
        setData(movies)
    };
    
    return (
        <>
            <h1>Hei</h1>
            <button type="button" onClick={handleClick}>Click</button>
            <Movie title={data.map(data => (data.title))} actor={data.map(data => (data.actor))} />
        </>
    );
};

export default Movies;