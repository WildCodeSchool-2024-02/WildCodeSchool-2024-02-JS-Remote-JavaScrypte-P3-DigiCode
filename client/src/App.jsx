import { Outlet } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
