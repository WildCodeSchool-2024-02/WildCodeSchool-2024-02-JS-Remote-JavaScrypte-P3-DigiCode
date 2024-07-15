import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import VideoCard from "../../components/videocard/VideoCard";
import "./CategoryPage.css";

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

  return (
    <>
      <Link to="/categories">
        <button type="button" className="backButton">
          Back
        </button>
      </Link>
      <h1 className="cTitle">{categoryFind.name.replaceAll("-", " ")}</h1>
      <div className="categoryCards">
        {result && result[0].id !== null ? (
          result.map((v) => <VideoCard video={v} key={v.id} />)
        ) : (
          <h2>There are no videos associated with this category</h2>
        )}
      </div>
    </>
  );
}
