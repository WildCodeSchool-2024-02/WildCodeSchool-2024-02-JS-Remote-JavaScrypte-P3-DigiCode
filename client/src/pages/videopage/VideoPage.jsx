import {
  useLoaderData,
  Link,
  useNavigate,
  useOutletContext,
} from "react-router-dom";
import { useEffect } from "react";
import "./VideoPage.css";

export default function VideoPage() {
  const videoData = useLoaderData();
  const { currentUser } = useOutletContext();

  const Navigate = useNavigate();

  useEffect(() => {
    if (videoData.is_connected && !currentUser) {
      setTimeout(() => Navigate("/login"), 5000);
    }
  }, [videoData.is_connected, currentUser, Navigate]);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <>
      <button type="button" onClick={handleBack} className="backButton">
        Back
      </button>
      {videoData.is_connected && currentUser === null ? (
        <h1 className="video-title">
          To view this video, you need to be connected. You will be redirected
          to the login page . . .
        </h1>
      ) : (
        <div className="video-container">
          <h1 className="video-title">{videoData.title}</h1>
          <video controls poster={videoData.image} className="video-playback">
            <source src={videoData.url} type="video/mp4" />
            <track kind="captions" />
          </video>
          <div className="video-description">
            <p className="video-metadata">
              <span>
                {videoData.date != null
                  ? videoData.date.slice(0, 10)
                  : "No date"}
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
      )}
    </>
  );
}
