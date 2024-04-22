import css from "./MovieReviewsList.module.css";

const MovieReviewsList = ({ reviews }) => {
  return (
    <ul className={css.list}>
      {reviews.map((review) => {
        return (
          <li key={review.id} className={css.item}>
            <p className={css.author}>Author: {review.author} </p>
            <p className={css.rating}>
              {" "}
              Rating: {review.author_details.rating}
            </p>
            <p className={css.descr}>{review.content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieReviewsList;
