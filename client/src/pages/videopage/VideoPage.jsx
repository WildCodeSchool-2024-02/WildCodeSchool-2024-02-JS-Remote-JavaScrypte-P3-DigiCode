import { useLoaderData } from "react-router-dom";
import "./VideoPage.css";

export default function VideoPage() {
  const videoData = useLoaderData();

  const handleBack = () => {
    window.history.back();
  };

  return (
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
          <span>{videoData.date.slice(0, 10)}</span>
          <span>{videoData.category || "Uncategorized"}</span>
        </p>
        <p>{videoData.description}</p>
      </div>
    </div>
  );
}
