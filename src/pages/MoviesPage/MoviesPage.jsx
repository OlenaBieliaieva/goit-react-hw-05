import css from "./MoviesPage.module.css";

import toast, { Toaster } from "react-hot-toast";
import { fetchMoviesByQuery } from "../../services/api";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { LoadMoreBtn } from "../../components/LoadMoreBtn/LoadMoreBtn";

import MovieList from "../../components/MovieList/MovieList";
import MovieSearchForm from "../../components/MovieSearchForm/MovieSearchForm";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("query");
  const [page, setPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!searchQuery) return;
    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchMoviesByQuery(searchQuery, page);
        setMovies((prevMovies) => [...prevMovies, ...data.results]);
        setIsVisible(page < data.total_pages);
      } catch (error) {
        setError(error);
        toast.error("Oops, something went wrong!");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [searchQuery, page]);

  const onSearch = (value) => {
    setMovies([]);
    setIsEmpty(true);
    setSearchParams({ query: value });
    setPage(1);
  };

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className={css.container}>
      <MovieSearchForm onSearch={onSearch} />
      {loading && <Loader />}
      <Toaster position="top-right" reverseOrder={false} />
      {error && <ErrorMessage />}
      {movies.length > 0 && <MovieList movies={movies} />}
      {isVisible && !loading && <LoadMoreBtn onLoadMore={onLoadMore} />}
      {isEmpty && movies.length < 1 && !loading && (
        <p>No movie with this title has been found. Try another one.</p>
      )}
    </div>
  );
};

export default MoviesPage;
