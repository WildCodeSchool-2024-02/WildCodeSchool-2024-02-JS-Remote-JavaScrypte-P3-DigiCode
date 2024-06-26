/* eslint-disable react/jsx-props-no-spreading */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"

export default function SearchBar() {
    const [inputValue, SetInputValue] = useState("");

    const {
        register,
        handleSubmit,
        formState: { errors }
        } = useForm();
    const navigate = useNavigate();

    const submitAction = (e) => {
        e.preventDefault()
        navigate(`/search?q=${inputValue}`)
    };
    
    return (
        <form onSubmit={handleSubmit(submitAction)}>
            <input id="search" type="text" value={inputValue} onChange={(event) => SetInputValue(event.target.value)} {...register("search", {
                required: "Your search can't be empty",
                minLength: {
                    value: 2,
                    message: "You need at least 2 characters"
                },
                maxLength: {
                    value: 50,
                    message: "You can't search more than 50 characters"
                }
            })} />
            {errors.search && (
                <p>{errors.search.message}</p>
            )}
            <button type="submit" >search</button>
        </form>
    )
}