import {
  useLoaderData,
  Link,
  Navigate,
  useOutletContext,
} from "react-router-dom";
import "./VideoPage.css";

export default function VideoPage() {
  const videoData = useLoaderData();
  const { currentUser } = useOutletContext();
  console.info(videoData);

  const handleBack = () => {
    window.history.back();
  };

  return videoData.is_connected && currentUser == null ? (
    <Navigate to="/login" />
  ) : (
    <div className="video-container">
      <button type="button" onClick={handleBack} className="backButton">
        Back
      </button>
      <h1 className="video-title">{videoData.title}</h1>
      <video controls poster={videoData.image} className="video-playback">
        <source src={videoData.url} type="video/mp4" />
        <track kind="captions" />
      </video>
      <div className="video-description">
        <p className="video-metadata">
          <span>
            {videoData.date != null ? videoData.date.slice(0, 10) : "No date"}
          </span>{" "}
          <span>
            {videoData.category != null ? (
              <Link to={`/categories/${videoData.category}`}>
                {videoData.category}
              </Link>
            ) : (
              "No category"
            )}
          </span>
        </p>
        <p>{videoData.description}</p>
      </div>
    </div>
  );
}
