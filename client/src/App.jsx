import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "./components/navbar/NavBar";
import fetchAuth from "./utils/auth";

import "./App.css";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetchAuth().then((response) => setCurrentUser(response));
  }, []);

  return (
    <div className="app-container">
      <NavBar user={currentUser} setUser={setCurrentUser} />
      <main>
        <Outlet context={{ currentUser, setCurrentUser }} />
      </main>
    </div>
  );
}

export default App;
