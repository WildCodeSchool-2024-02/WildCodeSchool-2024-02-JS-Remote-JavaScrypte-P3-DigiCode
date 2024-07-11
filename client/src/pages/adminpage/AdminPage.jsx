import axios from "axios";
import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

export default function AdminPage() {
  const { currentUser } = useOutletContext();

  useEffect(() => {
    try {
      axios.get(`${import.meta.env.VITE_API_URL}/api/auth/checkauth`, {
        withCredentials: true,
      });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return currentUser && currentUser.role === "admin" ? (
    <h1>Admin page</h1>
  ) : (
    <h2>Not connected as an admin</h2>
  );
}
