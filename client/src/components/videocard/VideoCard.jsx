import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import "./VideoCard.css";

export default function VideoCard({ video }) {
  return (
    <NavLink className="cardContainer" to={`/video/${video.id}`}>
      <div className="overlay">
        <h2 className="cardTitle">{video.title}</h2>
      </div>
      <img className="cardImage" src={video.image} alt={video.title} />
    </NavLink>
  );
}

VideoCard.propTypes = {
  video: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};
