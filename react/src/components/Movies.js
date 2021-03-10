import { useState } from 'react';
import { getMovies } from "../utils/movieService.js";
//import Movie from './Movie';

const Movies = () => {
    const [data, setData] = useState([]);
    
    const handleClick = async () => {
        const movies = await getMovies();
        setData(movies)
    };
    
    return (
        <>
            <h1>Hei</h1>
            {data?.length > 0 ? <p>{JSON.stringify(data)}</p> : null}
            <button type="button" onClick={handleClick}>Click</button>
        </>
    );
};

export default Movies;