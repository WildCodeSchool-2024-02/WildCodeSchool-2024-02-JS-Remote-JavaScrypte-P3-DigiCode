import axios from "axios";
import { useEffect, useState } from "react";
import { useOutletContext, Navigate } from "react-router-dom";
import VideoPanel from "../../components/videopanel/VideoPanel";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import "./AdminPage.css";

export default function AdminPage() {
  const [categoryData, setCategoryData] = useState();
  const { currentUser } = useOutletContext();

  useEffect(() => {
    const url = `${import.meta.env.VITE_API_URL}/api/auth/checkauth`;
    const express = import.meta.env.VITE_API_URL;

    // vérification de l'authentification (si currentUser n'est pas null)
    if (currentUser) {
      try {
        axios.get(url, {
          withCredentials: true,
        });
      } catch (err) {
        console.error(err);
      }
    }
    // fetch des catégories
    try {
      axios.get(`${express}/api/categories`).then((response) => {
        const { data } = response;
        setCategoryData(data);
      });
    } catch (err) {
      console.error(err);
    }
  }, [currentUser]);

  return currentUser && currentUser.role === "admin" ? (
    <div className="admin-panel">
      <h1 className="admin-title">Admin Panel</h1>

      <div className="admin-panel-row1">
        <VideoPanel />

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
