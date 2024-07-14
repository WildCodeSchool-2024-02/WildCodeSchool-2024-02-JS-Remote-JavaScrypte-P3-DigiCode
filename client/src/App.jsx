import { Outlet } from "react-router-dom";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/navbar/NavBar";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div className="app-container">
      {currentUser != null ? <NavBar user={currentUser} /> : <NavBar />}
      <main>
        <ToastContainer role="alert" theme="dark" />
        <Outlet context={{ currentUser, setCurrentUser }} />
      </main>
    </div>
  );
}

export default App;
