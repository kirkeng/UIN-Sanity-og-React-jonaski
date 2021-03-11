const Movie = ({title, actor}) => {
    return (
      <>
      {title?.length > 0 ? <p>Film: {title} \n Medvirkende: {actor}</p> : null}
      </>
    );
  };
  
  export default Movie;