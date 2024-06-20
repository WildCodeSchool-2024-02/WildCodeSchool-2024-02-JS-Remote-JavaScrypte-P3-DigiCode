import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/homepage/HomePage";
import CategoryPage from "./pages/categorypage/CategoryPage";
import VideoPage from "./pages/videopage/VideoPage";
import SignupPage from "./pages/signupPage/SignupPage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/category",
        element: <CategoryPage />,
        loader: () => fetch(`http://localhost:3310/api/categories`)
      },
      {
        path: "/video/:id",
        element: <VideoPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
