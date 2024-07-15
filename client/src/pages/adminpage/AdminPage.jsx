import axios from "axios";
import { useEffect, useState } from "react";
import { useOutletContext, Navigate } from "react-router-dom";
import VideoAdd from "../../components/videoforms/VideoAdd";
import VideoDelete from "../../components/videoforms/VideoDelete";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import "./AdminPage.css";

export default function AdminPage() {
  const [categoryData, setCategoryData] = useState();
  const { currentUser } = useOutletContext();

  useEffect(() => {
    const express = import.meta.env.VITE_API_URL;
    // vérification de l'authentification
    try {
      axios.get(`${express}/api/categories`).then((response) => {
        const { data } = response;
        setCategoryData(data);
      });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return currentUser?.role === "admin" ? (
    <div className="admin-panel">
      <h1 className="admin-title">Admin Panel</h1>
      <div className="admin-panel-row1">
        <VideoAdd />
        <VideoDelete />
        <section>
          <h2>Categories Panel</h2>

          <select>
            {categoryData?.map((cat) => (
              <option
                key={cat.id}
              >{`${cat.name.charAt(0).toUpperCase()}${cat.name.slice(1)}`}</option>
            ))}
          </select>
        </section>
      </div>
      <div>
        <h2>Hero slider</h2>
        <HeroSlider />
      </div>
    </div>
  ) : (
    <Navigate to="/" />
  );
}
