import css from "./MovieList.module.css";

import Movie from "../Movie/Movie";

const MovieList = ({ movies }) => {
  return (
    <ul className={css.list}>
      {movies.map((movie) => {
        return (
          <li key={movie.id} className={css.item}>
            <Movie movie={movie} />
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
