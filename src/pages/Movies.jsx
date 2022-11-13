import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'components/API/API';
import { HomeList } from 'components/HomeList/HomeList';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [query, setQuery] = useState('');
  const [queryParams, setQueryParams] = useSearchParams();
  const searchQuery = queryParams.get('query') ?? '';

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!query) {
      alert('Please enter movie');
      return;
    }
    setQueryParams({ query });
    getSearchMovies(query).then(res => setFilms(res.results));
    setQuery('');
  };

  useEffect(() => {
    if (searchQuery) {
      getSearchMovies(searchQuery).then(res => setFilms(res.results));
    }
  }, [searchQuery]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          name="searchQuery"
          autoComplete="off"
          autoFocus
          placeholder="Search movie..."
          value={query}
        />
        <button>Find</button>
      </form>

      {films.length > 0 ? <HomeList films={films} /> : null}
    </>
  );
};

export default Movies;
