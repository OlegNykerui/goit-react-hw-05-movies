import { useLocation, Link } from 'react-router-dom';
import { Image, List, Item, Title, Text } from './HomeList.styled';

export const HomeList = ({ films }) => {
  const location = useLocation();

  return (
    <List>
      {films.map(film => (
        <Item key={film.id}>
          <Link
            to={`/movies/${film.id}`}
            state={{ from: location }}
            style={{ textDecoration: 'none' }}
          >
            {film.poster_path ? (
              <Image
                src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
                alt={film.title}
              ></Image>
            ) : (
              <Image src="https://i.gifer.com/C7Gr.gif" alt="error"></Image>
            )}
            <Title>{film.title}</Title>
            <Text> Rating: {film.vote_average}</Text>
            <Text>Popular: {film.popularity}%</Text>
            <Text> Relase year: {film.release_date}</Text>
          </Link>
        </Item>
      ))}
    </List>
  );
};
