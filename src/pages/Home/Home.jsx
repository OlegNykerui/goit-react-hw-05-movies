import { useState, useEffect } from 'react';
import { getTrending } from 'components/API/API';
import { HomeList } from 'components/HomeList/HomeList';
import css from './Home.module.css';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getTrending().then(data => setFilms(data.results));
  }, []);

  return (
    <main>
      <h1 className={css.title}>Trending today</h1>
      <HomeList films={films} />
    </main>
  );
};

export default Home;
