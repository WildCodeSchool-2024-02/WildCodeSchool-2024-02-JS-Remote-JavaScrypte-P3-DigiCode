import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./SearchBar.css";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.length > 1) {
      navigate(`/result/${inputValue}`);
    }
  };

  return (
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
  );
}
