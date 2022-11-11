import { useLocation, Link } from 'react-router-dom';

export const HomeList = ({ films }) => {
  const location = useLocation();

  return (
    <ul>
      {films.map(film => (
        <li key={film.id}>
          <Link to={`/movies/${film.id}`} state={{ from: location }}>
            {film.poster_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={film.title}
              ></img>
            ) : (
              <img src="https://i.gifer.com/C7Gr.gif" alt="error"></img>
            )}
            <h2>{film.title}</h2>
            <p>{film.vote_average}</p>
            <p>{film.popularity}</p>
            <p> Relase year: {film.release_date}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
