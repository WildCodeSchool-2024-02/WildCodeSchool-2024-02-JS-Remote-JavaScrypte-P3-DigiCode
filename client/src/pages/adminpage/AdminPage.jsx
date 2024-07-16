import axios from "axios";
import { useEffect, useState } from "react";
import { useOutletContext, Navigate } from "react-router-dom";
import VideoPanel from "../../components/videopanel/VideoPanel";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import CategoryAdd from "../../components/categoryforms/CategoryAdd";
import CategoryDelete from "../../components/categoryforms/CategoryDelete";

import "./AdminPage.css";

export default function AdminPage() {
  const [setCategoryData] = useState();
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
  }, [setCategoryData]);

  return currentUser?.role === "admin" ? (
    <div className="admin-panel">
      <h1 className="admin-title">Admin Panel</h1>
      <div className="admin-panel-row1">
        <VideoPanel />
      </div>
      <div>
        <CategoryAdd />
      </div>
      <div>
        <CategoryDelete />
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
