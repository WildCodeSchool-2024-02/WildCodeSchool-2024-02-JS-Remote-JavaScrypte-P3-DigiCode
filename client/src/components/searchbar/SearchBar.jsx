import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "./SearchBar.css";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.length > 2) {
      navigate(`/result/${inputValue}`);
    }
    if (inputValue.length < 2) {
      toast.error("Please enter at least 2 characters");
    }
  };

  return (
    <>
      <ToastContainer />
      <form className="searchForm" onSubmit={handleSubmit}>
        <input
          id="search"
          type="text"
          placeholder="Search"
          onChange={(event) => setInputValue(event.target.value)}
        />
        <button className="searchButton" type="submit">
          🔎
        </button>
      </form>
    </>
  );
}
