import { useLoaderData } from "react-router-dom";

export default function VideoPage() {
  const videoData = useLoaderData();

  return (
    <>
      <h1>{videoData.title}</h1>
      <video controls width="60%">
        <source src={videoData.url} type="video/mp4" />
        <track kind="captions" />
      </video>
      <p>{videoData.description}</p>
      <p>{videoData.date}</p>
    </>
  );
}
