/* eslint-disable react/jsx-props-no-spreading */
import axios from "axios";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export default function CategoryDelete() {
  const [categoryData, setCategoryData] = useState();
  const expressURL = import.meta.env.VITE_API_URL;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.delete(`${expressURL}/api/categories/${data.id}`, data);
    } catch (err) {
      console.error(err);
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
  }, []);

  return (
    <section>
      <h2>Delete a category</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="pannel-category">
          <label htmlFor="category"> Category </label>
          <select name="category" {...register("id")}>
            {categoryData?.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {`${cat.name.charAt(0).toUpperCase()}${cat.name.slice(1)}`}
              </option>
            ))}
            {errors.id && <p>{errors.id.message}</p>}
          </select>
        </div>
        <button type="submit"> Delete category</button>
      </form>
    </section>
  );
}
