import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoCard from "../../components/videocard/VideoCard";

export default function CategoryPage() {
  const [result, setResult] = useState();
  const categoryFind = useParams();

  useEffect(() => {
    const express = import.meta.env.VITE_API_URL;
    const fetchCategoryVideo = async () => {
      const response = await fetch(
        `${express}/api/categories/${categoryFind.name.replaceAll("-", " ")}`
      );
      const data = await response.json();
      setResult(data);
    };
    fetchCategoryVideo();
  }, [categoryFind]);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <>
      <button type="button" onClick={handleBack} className="backButton">
        Back
      </button>
      <h1>{categoryFind.name.replaceAll("-", " ")}</h1>
      {result && result[0].id !== null ? (
        result.map((v) => <VideoCard video={v} key={v.id} />)
      ) : (
        <h2>no video associate</h2>
      )}
    </>
  );
}
