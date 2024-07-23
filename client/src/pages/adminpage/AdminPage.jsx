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
<h2> Video pannel </h2>
      <section className="admin-panel-video">
      <h3> Video add </h3>
        <VideoAdd />
        <h3> Video Delete </h3>
        <VideoDelete />
        <h3> Video Update </h3>
        <VideoUpdate/>
      </section>
      <section className="admin-pannel-category"> 
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
    </section>  </div>
  
  ) : (
    <Navigate to="/" />
  );
}
