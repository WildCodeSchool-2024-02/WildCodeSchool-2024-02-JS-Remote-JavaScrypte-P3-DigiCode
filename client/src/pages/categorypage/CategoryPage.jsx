import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
        result.map((v) => (
          <div key={v.id}>
            <img src={v.image} alt={v.title} />
            <h2>{v.title}</h2>
          </div>
        ))
      ) : (
        <h2>no video associate</h2>
      )}
    </>
  );
}
