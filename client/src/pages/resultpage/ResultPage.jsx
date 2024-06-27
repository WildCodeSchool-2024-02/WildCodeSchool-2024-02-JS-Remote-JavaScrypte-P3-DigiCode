import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../../components/searchbar/SearchBar";
import VideoCard from "../../components/videocard/VideoCard";

export default function ResultPage() {
  const [result, setResult] = useState();
  const { q } = useParams();

  useEffect(() => {
    const express = import.meta.env.VITE_API_URL;
    const fetchVideo = async () => {
      const response = await fetch(`${express}/api/videos/q/${q}`);
      const data = await response.json();
      setResult(data);
    };
    fetchVideo();
  }, [q]);

  return (
    <>
      <h1>search page</h1>
      <SearchBar />
      {result && result.map((v) => <VideoCard video={v} key={v.id} />)}
    </>
  );
}
