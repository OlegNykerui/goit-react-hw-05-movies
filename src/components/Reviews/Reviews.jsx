import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'components/API/API';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(data => {
      setReviews(data.results);
    });
  }, [movieId]);

  if (reviews.length === 0) {
    return <p className={css.alert}>Sorry, no reviews yet </p>;
  }

  return (
    <ul className={css.list}>
      {reviews.map(item => {
        return (
          <li className={css.item} key={item.id}>
            <h3>
              <p>Author:</p>
              {item.author_details.name
                ? item.author_details.name
                : 'Anonymous'}
            </h3>
            <p>{item.username}</p>
            <p className={css.content}>{item.content}</p>
            <b>rating from author: {item.author_details.rating}</b>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
