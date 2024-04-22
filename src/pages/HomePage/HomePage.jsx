import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { fetchTrendingMovies } from "../../services/api";

import MovieList from "../../components/MovieList/MovieList";
import { LoadMoreBtn } from "../../components/LoadMoreBtn/LoadMoreBtn";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [time, setTime] = useState("week");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchTrendingMovies(time, page);
        if (data.results.length > 0) {
          setMovies((prevMovies) => [...prevMovies, ...data.results]);
        }
        setIsVisible(page < data.total_pages);
      } catch (error) {
        setError(error);
        toast.error("Oops, something went wrong!");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [time, page]);

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handleChangeTime = (value) => {
    setMovies([]);
    setPage(1);
    setTime(value);
  };

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      {error && <ErrorMessage />}
      {loading && <Loader />}
      <MovieList movies={movies} />
      {isVisible && !loading && <LoadMoreBtn onLoadMore={onLoadMore} />}
    </div>
  );
};

export default HomePage;
