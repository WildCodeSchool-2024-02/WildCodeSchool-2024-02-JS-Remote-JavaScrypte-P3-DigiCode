import axios from "axios";

export default async function logout() {
  try {
    await axios.get(`${import.meta.env.VITE_API_URL}/api/auth/logout`, {
      withCredentials: true,
    });
    window.location.reload();
  } catch (err) {
    console.error(err);
  }
}
