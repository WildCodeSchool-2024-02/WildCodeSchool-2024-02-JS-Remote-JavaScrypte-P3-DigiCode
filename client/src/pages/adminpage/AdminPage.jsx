import axios from "axios";
import { useEffect } from "react";
import { useOutletContext, Navigate } from "react-router-dom";
import VideoPanel from "../../components/videopanel/VideoPanel";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import CategoryAdd from "../../components/categoryforms/CategoryAdd";
import CategoryDelete from "../../components/categoryforms/CategoryDelete";
import CategoryUpdate from "../../components/categoryforms/CategoryUpdate";
import "./AdminPage.css";

export default function AdminPage() {
  const { currentUser } = useOutletContext();

  useEffect(() => {
    const url = `${import.meta.env.VITE_API_URL}/api/auth/checkauth`;

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
  }, [currentUser]);

  return currentUser && currentUser.role === "admin" ? (
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
        <CategoryUpdate />
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
