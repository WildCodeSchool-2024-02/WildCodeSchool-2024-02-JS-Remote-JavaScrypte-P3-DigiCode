import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/homepage/HomePage";
import CategoriesPage from "./pages/categoriespage/CategoriesPage";
import CategoryPage from "./pages/categorypage/CategoryPage";
import VideoPage from "./pages/videopage/VideoPage";
import SignupPage from "./pages/signupPage/SignupPage";
import ResultPage from "./pages/resultpage/ResultPage";



const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetch("http://localhost:3310/api/videos"),
      },
      {
        path: "/categories",
        element: <CategoriesPage />,
        loader: () => fetch(`http://localhost:3310/api/categories`)
      },
      {        
        path: "/categories/:name",
        element: <CategoryPage />,
      },
      {
        path: "/video/:id",
        element: <VideoPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/result/:q",
        element: <ResultPage/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
