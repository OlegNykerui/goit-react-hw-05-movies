import { useState, useEffect } from 'react';
import { getTrending } from 'components/API/API';
import { HomeList } from 'components/HomeList/HomeList';

const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    getTrending().then(data => setFilms(data.results));
  }, []);

  return (
    <main style={{ backgroundColor: '#a8a8a8;' }}>
      <h1>Trending today</h1>
      <HomeList films={films} />
    </main>
  );
};

export default Home;
