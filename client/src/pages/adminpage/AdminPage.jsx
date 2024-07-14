import axios from "axios";
import { useEffect, useState } from "react";
import { useOutletContext, Navigate } from "react-router-dom";
import VideoPanel from "../../components/videopanel/VideoPanel";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import fetchAuth from "../../utils/auth";

export default function AdminPage() {
  const [categoryData, setCategoryData] = useState();
  const { currentUser, setCurrentUser } = useOutletContext();

  useEffect(() => {
    const express = import.meta.env.VITE_API_URL;

    // vérification de l'authentification
    fetchAuth().then((response) => setCurrentUser(response));

    try {
      axios.get(`${express}/api/categories`).then((response) => {
        const { data } = response;
        setCategoryData(data);
      });
    } catch (err) {
      console.error(err);
    }
  }, [setCurrentUser]);

  return currentUser && currentUser.role === "admin" ? (
    <>
      <h1>Admin Panel</h1>
      <VideoPanel />
      <div>
        <h2> Categories panel </h2>

        <select>
          {categoryData?.map((cat) => (
            <option key={cat.id}> {cat.name} </option>
          ))}
        </select>
      </div>
      <div>
        <h2>Hero slider</h2>
        <HeroSlider />
      </div>
    </>
  ) : (
    <Navigate to="/" />
  );
}
