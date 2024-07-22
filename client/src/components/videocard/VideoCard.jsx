import { NavLink, useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";
import "./VideoCard.css";

export default function VideoCard({ video }) {
  const { currentUser } = useOutletContext();

  return (
    <NavLink className="cardContainer" to={`/video/${video.id}`}>
      <div className="overlay">
        <h2 className="cardTitle">{video.title}</h2>
      </div>
      {video.is_connected === 0 || currentUser != null ? (
        <img className="cardImage" src={video.image} alt={video.title} />
      ) : (
        <img id="imageNotConnected" src={video.image} alt={video.title} />
      )}
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
