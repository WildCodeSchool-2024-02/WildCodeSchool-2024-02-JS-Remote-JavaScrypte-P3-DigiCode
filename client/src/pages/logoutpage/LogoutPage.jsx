import { Link, useOutletContext } from "react-router-dom";
import axios from "axios";

export default function LogoutPage() {
  const { currentUser, setCurrentUser } = useOutletContext();
  const expressURL = import.meta.env.VITE_API_URL;

  const handleLogout = async () => {
    try {
      await axios.get(`${expressURL}/api/auth/logout`, {
        withCredentials: true,
      });
      setCurrentUser(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {currentUser == null ? (
        <>
          <p>You are logged out</p>
          <Link to="/">Home</Link>
        </>
      ) : (
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
}
