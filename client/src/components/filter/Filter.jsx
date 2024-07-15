import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Filter.css";

export default function Filter({ category }) {
  return (
    <div className="filter-wrapper">
      <h1>Categories</h1>
      <div className="filterContainer">
        {category.map((c) => (
          <Link
            to={`/categories/${c.name.replaceAll(" ", "-")}`}
            className="filterButton"
            type="button"
            key={c.name}
          >
            <span className="categories-mapped-name">{`${c.name.charAt(0).toUpperCase()}${c.name.slice(1)}`}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

Filter.propTypes = {
  category: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
