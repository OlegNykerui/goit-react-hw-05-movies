import { useLocation, useParams, Outlet, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'components/API/API';
import css from './MovieDetails.module.css';

import nextId from 'react-id-generator';

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
    <div className={css.wrapper}>
      <Link to={prevLocation}>
        <button className={css.button}> Go back</button>
      </Link>
      <div>
        {movie.poster_path ? (
          <img
            className={css.image}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        ) : (
          <img src="https://i.gifer.com/C7Gr.gif" alt="error" />
        )}
      </div>

      <div className={css.text_box}>
        <h2 key="title">{movie.title}</h2>
        <p key="rating">Rating: {movie.vote_average}</p>
        <p key="runtime">Views: {movie.runtime}</p>
        <p key="data">Release data: {movie.release_date}</p>
        <h3 key="genres">Genres</h3>
        {movie.genres.map(gen => (
          <ul>
            <li key={nextId()}>{gen.name}</li>
          </ul>
        ))}
        <ul className={css.list}>
          <li className={css.item}>
            <button className={css.reviews}>Cast</button>
          </li>
          <li>
            <button className={css.reviews}>Reviews</button>
          </li>
        </ul>
        {/* <Outlet /> */}
      </div>
    </div>
  );
};

export default MovieDetails;
