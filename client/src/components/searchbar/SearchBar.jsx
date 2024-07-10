import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./SearchBar.css";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/result/${inputValue}`);
  };

  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      <input
        id="search"
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button className="searchButton" type="submit">
        Search
      </button>
    </form>
  );
}
