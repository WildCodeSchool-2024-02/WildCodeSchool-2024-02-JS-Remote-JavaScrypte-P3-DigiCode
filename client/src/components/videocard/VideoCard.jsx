import { NavLink, useOutletContext } from "react-router-dom";
import PropTypes from "prop-types";
import "./VideoCard.css";
import { LockIcon } from "lucide-react";

export default function VideoCard({ video }) {
  const { currentUser } = useOutletContext();

  return (
    <NavLink className="cardContainer" to={`/video/${video.id}`}>
      <div className="overlay">
        <h2 className="cardTitle">{video.title}</h2>
      </div>
      <div className="cardImageContainer">
        {video.is_connected === 0 || currentUser != null ? (
          <img className="cardImage" src={video.image} alt={video.title} />
        ) : (
          <>
            <img
              className="imageNotConnected"
              src={video.image}
              alt={video.title}
            />
            <LockIcon className="lock" strokeWidth={1.5} stroke="#d9d9d9" />
          </>
        )}
      </div>
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
