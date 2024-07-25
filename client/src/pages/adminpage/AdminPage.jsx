import { Navigate, useOutletContext } from "react-router-dom";
import { useEffect } from "react";

import VideoAdd from "../../components/videoforms/VideoAdd";
import VideoDelete from "../../components/videoforms/VideoDelete";
import CategoryAdd from "../../components/categoryforms/CategoryAdd";
import CategoryDelete from "../../components/categoryforms/CategoryDelete";

import "./AdminPage.css";
import VideoUpdate from "../../components/videoforms/VideoUpdate";
import CategoryUpdate from "../../components/categoryforms/CategoryUpdate";

export default function AdminPage() {
  const { currentUser } = useOutletContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentUser.role !== "admin") {
        <Navigate to="/" />;
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [currentUser]);

  return (
    <>
      <h1 className="title-admin-page"> Admin pannel</h1>
      <div className="admin-panel">
        <section>
          <h2> Video panel </h2>
          <article className="admin-panel-video">
            <VideoAdd />
            <VideoUpdate />
            <VideoDelete />
          </article>
        </section>
        <section>
          <h2> Category Panel</h2>
          <article className="admin-panel-category">
            <CategoryAdd />
            <CategoryUpdate />
            <CategoryDelete />
          </article>
        </section>
      </div>
    </>
  );
}
