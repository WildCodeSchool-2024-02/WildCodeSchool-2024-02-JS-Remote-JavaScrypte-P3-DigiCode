/* eslint-disable react/jsx-props-no-spreading */
import axios from "axios";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function CategoryAdd() {
  const [setCategoryData] = useState();
  const expressURL = import.meta.env.VITE_API_URL;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post(`${expressURL}/api/categories`, data);
      toast.success("category added successfully!");
    } catch (err) {
      console.error(err);
      toast.error("An error occured, please try again");
    }
  };

  useEffect(() => {
    const express = import.meta.env.VITE_API_URL;
    try {
      axios.get(`${express}/api/categories`).then((response) => {
        const { data } = response;
        setCategoryData(data);
      });
    } catch (err) {
      console.error(err);
    }
  }, [setCategoryData]);

  const requiredFieldError = "This field is required!";

  return (
    <>
      <h1>Category Panel</h1>
      <section>
        <h2>Add a category</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="category-panel_name">
            <label htmlFor="name"> Category name </label>
            <input
              type="text"
              name="name"
              {...register("name", {
                required: requiredFieldError,
                minLength: {
                  value: 2,
                  message: "You need at least 2 characters",
                },
              })}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          <button type="submit">Add category</button>
        </form>
      </section>
    </>
  );
}
