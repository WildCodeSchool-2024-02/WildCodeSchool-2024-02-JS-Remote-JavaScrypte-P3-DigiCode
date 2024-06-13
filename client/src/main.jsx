import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/homepage/HomePage";
import CategoryPage from "./pages/categorypage/CategoryPage";
import VideoPage from "./pages/videopage/VideoPage";


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
         path: "/",
         element: <HomePage />
      },
      {
        path: "/category",
        element: <CategoryPage />
      },
      {
       path : "/video/:id",
       element : <VideoPage /> 
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
