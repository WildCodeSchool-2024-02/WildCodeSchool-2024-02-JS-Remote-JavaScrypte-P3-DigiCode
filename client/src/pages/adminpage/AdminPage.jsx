import axios from "axios";
import { useEffect, useState } from "react";
import { useOutletContext , Navigate } from "react-router-dom";
import VideoPanel from "../../components/videopanel/VideoPanel";
import HeroSlider from "../../components/HeroSlider/HeroSlider";

export default function AdminPage() {



  const [categoryData, setCategoryData] = useState();
  const { currentUser } = useOutletContext();

  useEffect(() => {
    const url = `${import.meta.env.VITE_API_URL}/api/auth/checkauth`;
    const express = import.meta.env.VITE_API_URL;

    // vérification de l'authentification
    try {
      axios.get(url, {
        withCredentials: true,
      });
    } catch (err) {
      console.error(err);
    }

    try {
      axios.get(`${express}/api/categories`).then((response) => {
        const { data } = response;
        setCategoryData(data);
      });
    } catch (err) {
      console.error(err);
    }
  }, []);

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
   <Navigate to="/"/>
  )
}
