import css from "./MovieDetails.module.css";

const MovieDetails = ({ movie }) => {
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
      <h3 className={css.title}>{movie.title}</h3>
      <div className={css.descprList}>
        <p className={css.description}>{movie.overview}</p>
        <p className={css.text}>Release date: {movie.release_date}</p>
        <p className={css.text}>Runtime: {movie.runtime}min.</p>
        <p className={css.text}>Rating: {movie.vote_average}</p>
        <div className={css.listWrap}>
          <p className={css.text}>Genre:</p>
          <ul className={css.list}>
            {movie.genres.map((genre) => (
              <li key={genre.id} className={css.item}>
                <p className={css.genre}>{genre.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;
