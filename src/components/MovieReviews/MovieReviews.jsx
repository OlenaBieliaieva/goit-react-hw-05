import { useState, useEffect } from "react";
import css from "./MovieReviews.module.css";
import { fetchReviews } from "../../services/api";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import toast, { Toaster } from "react-hot-toast";
import { useParams } from "react-router-dom";
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn";
import MovieReviewsList from "../MovieReviewsList/MovieReviewsList";

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchReviews(movieId, page);
        setReviews((prevReviews) => [...prevReviews, ...data]);
        setIsVisible(page < data.total_pages);
      } catch (error) {
        setError(error);
        toast.error("Opps! Looks like something went wrong.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [movieId, page]);

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className={css.container}>
      <Toaster position="top-right" reverseOrder={false} />
      {error && <ErrorMessage />}
      <h3 className={css.title}>Movie Reviews</h3>
      {loading && <Loader />}
      {reviews.length > 0 ? (
        <MovieReviewsList reviews={reviews} />
      ) : (
        <p>There are no reviews for this movie just yet.</p>
      )}
      {isVisible && !loading && <LoadMoreBtn onLoadMore={onLoadMore} />}
    </div>
  );
};

export default MovieReviews;
