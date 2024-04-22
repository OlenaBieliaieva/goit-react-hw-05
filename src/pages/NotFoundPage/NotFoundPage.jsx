import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div>
      <Link to="/" className={css.btn}>
        HomePage
      </Link>
      <h2>Oops! The page was not found!</h2>
    </div>
  );
};

export default NotFoundPage;
