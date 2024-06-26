import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate(`/result/${inputValue}`)
    };

    
    return (
        <form onSubmit={handleSubmit}>
            <input id="search" type="text" onChange={(event) => setInputValue(event.target.value)}/>
            <button type="submit">search</button>
       </form>
    )
}