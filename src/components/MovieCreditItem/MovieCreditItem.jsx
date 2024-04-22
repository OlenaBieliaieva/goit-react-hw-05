import css from "./MovieCreditItem.module.css";

const MovieCreditItem = ({ cast }) => {
  const baseURL = "https://image.tmdb.org/t/p/w500";
  return (
    <div className={css.container}>
      <div className={css.wrap}>
        <img
          className={css.img}
          src={
            cast.profile_path
              ? `${baseURL}/${cast.profile_path}`
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
          }
        />
      </div>
      <h3 className={css.title}>{cast.name}</h3>
    </div>
  );
};
export default MovieCreditItem;
