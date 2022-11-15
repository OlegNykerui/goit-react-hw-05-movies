import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'components/API/API';
import css from './Cast.module.css';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    getMovieCredits(movieId).then(data => {
      setCast(data.cast);
    });
  }, [movieId]);

  return (
    <ul className={css.list}>
      {cast
        ? cast.map(item => (
            <li key={item.name} className={css.item}>
              {item.profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                  alt={item.name}
                  className={css.img}
                />
              ) : (
                <img src={'https://i.gifer.com/C7Gr.gif'} alt={item.name} />
              )}
              <div>
                <h2>{item.name}</h2>
                <p>Character: {item.character}</p>
                <p>Popular: {item.popularity}%</p>
              </div>
            </li>
          ))
        : null}
    </ul>
  );
};

export default Cast;
