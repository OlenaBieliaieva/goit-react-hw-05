import css from "./Movie.module.css";

import { Link, useLocation } from "react-router-dom";

const Movie = ({ movie }) => {
  const location = useLocation();
  const baseURL = "https://image.tmdb.org/t/p/w500";
  return (
    <div className={css.container}>
      <div className={css.wrap}>
        <img
          src={
            movie.backdrop_path
              ? `${baseURL}/${movie.backdrop_path}`
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYVjCv6r01QNNREAOWdrg1XtogAUnho3wTmtnubDkacSR7UlSWJWD7yAj5h4DU7NS9ecw&usqp=CAU"
          }
          className={css.img}
        />
      </div>
      <Link
        to={`/movies/${movie.id}`}
        className={css.link}
        state={{ from: location }}
      >
        <h3 className={css.title}>{movie.title}</h3>
      </Link>
    </div>
  );
};
export default Movie;
