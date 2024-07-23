import { Navigate, useOutletContext } from "react-router-dom";
import VideoAdd from "../../components/videoforms/VideoAdd";
import VideoDelete from "../../components/videoforms/VideoDelete";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import CategoryAdd from "../../components/categoryforms/CategoryAdd";
import CategoryDelete from "../../components/categoryforms/CategoryDelete";

import "./AdminPage.css";
import VideoUpdate from "../../components/videoforms/VideoUpdate";

export default function AdminPage() {
  const { currentUser } = useOutletContext();

  return currentUser?.role === "admin" ? (
    <div className="admin-panel">
      <h1 className="admin-title">Admin Panel</h1>
      <div className="admin-panel-row1">
        <VideoAdd />
        <VideoDelete />
        <VideoUpdate/>
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
