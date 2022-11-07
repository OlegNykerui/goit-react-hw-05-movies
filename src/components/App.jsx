import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Movies from './Movies';
import MovieDetails from './MovieDetails';

import Cast from './Cast';
import Reviews from './Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />}></Route>
          <Route path="reviews" element={<Reviews />}></Route>
        </Route>
      </Route>
    </Routes>
  );
};
