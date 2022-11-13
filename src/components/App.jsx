import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from '../pages/Home/Home';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';

import Cast from './Cast';
import Reviews from './Reviews';

export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />}></Route>
            <Route path="reviews" element={<Reviews />}></Route>
            <Route path="*" element={<p>Not found </p>} />
          </Route>
        </Route>
      </Routes>
    </Layout>
  );
};
