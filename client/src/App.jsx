import { Outlet } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/navbar/NavBar";

import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <div className="app-container">
      <NavBar context={{ currentUser, setCurrentUser }} />
      <main>
        <Outlet context={{ currentUser, setCurrentUser }} />
      </main>
    </div>
  );
}

export default App;
