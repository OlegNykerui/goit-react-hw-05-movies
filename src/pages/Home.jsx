import { useState, useEffect } from 'react';
import { getTrending } from 'components/API/API';

const Home = () => {
  const [film, setFilm] = useState([]);

  useEffect(() => {
    getTrending().then(data => setFilm(data.result));
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
    </main>
  );
};

export default Home;
