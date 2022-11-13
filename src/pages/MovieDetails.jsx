import { useLocation, useParams, Outlet, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import nextId from 'react-id-generator';
import { getMovieDetails } from 'components/API/API';

const MovieDetails = () => {
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const prevLocation = location.state?.from ?? '/';

  useEffect(() => {
    getMovieDetails(movieId).then(data => {
      setMovie(data);
    });
  }, [movieId]);

  if (!movie) {
    return;
  }

  return (
    <>
      <Link to={prevLocation}> Go back</Link>
      <div>
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        ) : (
          <img src="https://i.gifer.com/C7Gr.gif" alt="error" />
        )}

        <h2>asfa</h2>
        <p key="title">{movie.title}</p>
        <p key="rating">{movie.vote_average}</p>
        <p key="runtime">{movie.runtime}</p>
        <p key="data">{movie.release_date}</p>
        <h3 key="genres">Genres</h3>
        {movie.genres.map(gen => (
          <p key={nextId()}>{gen.name}</p>
        ))}
      </div>

      <ul>
        <li>Cast</li>
        <li>Reviews</li>
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetails;
