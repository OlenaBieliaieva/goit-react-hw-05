import css from "./MovieSearchForm.module.css";
import { FiSearch } from "react-icons/fi";
import toast from "react-hot-toast";

const MovieSearchForm = ({ onSearch }) => {
  const heandleSubmit = (evt) => {
    evt.preventDefault();
    if (evt.target.elements.query.value.trim() === "") {
      toast.error("Please fill in the field!");
      onSearch("");
    }
    const form = evt.target;
    const result = form.elements.query.value.trim();
    onSearch(result);
    form.reset();
  };

  return (
    <form onSubmit={heandleSubmit} className={css.form}>
      <button type="submit" className={css.btn} title="Search">
        <FiSearch />
      </button>
      <input
        type="text"
        required
        placeholder="Enter a movie title..."
        autoFocus
        name="query"
        className={css.input}
      />
    </form>
  );
};

export default MovieSearchForm;
