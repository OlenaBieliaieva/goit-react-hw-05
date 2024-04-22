import css from "./MovieCast.module.css";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCredits } from "../../services/api";
import toast, { Toaster } from "react-hot-toast";

import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import MovieCreditsList from "../MovieCreditsList/MovieCreditsList";

const MovieCast = () => {
  const [casts, setCast] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const fetchMovie = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchCredits(movieId);
        setCast(data);
      } catch (error) {
        setError(error);
        toast.error("Oops, something went wrong!");
      } finally {
        setLoading(false);
      }
    };
    fetchMovie();
  }, [movieId]);

  return (
    <div className={css.container}>
      <Toaster position="top-right" reverseOrder={false} />
      {error && <ErrorMessage />}
      <p className={css.title}>Movie Cast</p>
      {loading && <Loader />}
      {casts.length > 0 ? (
        <MovieCreditsList casts={casts} />
      ) : (
        <p>Sorry. No results have been found.</p>
      )}
    </div>
  );
};

export default MovieCast;
