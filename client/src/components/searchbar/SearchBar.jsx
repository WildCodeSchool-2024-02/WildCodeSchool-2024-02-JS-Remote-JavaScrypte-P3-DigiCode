/* eslint-disable react/jsx-props-no-spreading */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import "./SearchBar.css";

export default function SearchBar() {
  const [inputValue, setInputValue] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
  } = useForm();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/result/${inputValue}`);
  };

  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      <input
        id="search"
        type="text"
        placeholder="Search"
        {...register("search", {
          required: "This filed is required !",
          minLength: {
            value: 2,
            message: "You need at least 2 characters",
          },
        })}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button className="searchButton" type="submit">
        Search
      </button>
      {errors.search && <p className="form-error">{errors.search.message}</p>}
    </form>
  );
}
