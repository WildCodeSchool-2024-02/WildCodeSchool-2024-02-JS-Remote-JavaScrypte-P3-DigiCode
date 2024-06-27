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
  console.info(result);

  const handleBack = () => {
    window.history.back();
  };

  return (
    <button type="button" onClick={handleBack} className="backButton">
      Back
    </button>
  );
}
