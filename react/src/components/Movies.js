const Movies = () => {
    const [inputFromChild, setInputFromChild] = useState('');
    
    return (
        <>
        <Movie title={title} actor={actor} />
        <h1>Hei</h1>
        <button className="button" type="button" onClick={click}>Click</button>
        </>
    )
}

export default Movies;