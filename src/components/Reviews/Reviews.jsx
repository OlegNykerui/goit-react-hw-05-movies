import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'components/API/API';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId)
      .then(data => {
        setReviews(data.results);
      })
      .catch(error => console.log(error));
  }, [movieId, reviews]);

  if (reviews.length === 0) {
    return <p>Sorry, no reviews yet</p>;
  }

  return (
    <ul>
      {reviews.map(item => {
        return (
          <li key={item.id}>
            <h3>
              Author:{' '}
              {item.author_details.name
                ? item.author_details.name
                : 'Not found'}
            </h3>
            <p></p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
