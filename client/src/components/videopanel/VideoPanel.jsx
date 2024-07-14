/* eslint-disable react/jsx-props-no-spreading */
import axios from "axios";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function VideoPanel() {
  const [categoryData, setCategoryData] = useState();
  const expressURL = import.meta.env.VITE_API_URL;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (uploadData) => {
    try {
      await axios.post(`${expressURL}/api/videos`, uploadData);
      toast.success("video added successfully!");
    } catch (err) {
      toast.error("an error occured, please try again");
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
      <h1>Video Panel</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="pannel-title">
          <label htmlFor="name"> Title </label>
          <input
            type="text"
            name="title"
            {...register("title", {
              required: "This filed is required !",
              minLength: {
                value: 2,
                message: "You need at least 2 characters",
              },
            })}
          />
          {errors.title && <p> {errors.title.message}</p>}
        </div>
        <div className="pannel-description">
          <label htmlFor="description"> Description </label>
          <input
            type="text"
            name="description"
            {...register("description", {
              required: "This filed is required !",
              minLength: {
                value: 2,
                message: "You need at least 2 characters",
              },
            })}
          />
          {errors.description && <p> {errors.description.message}</p>}
        </div>

        <div className="pannelvideo-category">
          <label htmlFor="category">Category </label>
          <select name="category" {...register("category_id")}>
            {categoryData?.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            type="radio"
            name="free"
            value="0"
            {...register("is_connected")}
          />
          <label htmlFor="free"> Access limité </label>

          <input
            type="radio"
            name="premium"
            value="1"
            {...register("is_connected")}
          />
          <label htmlFor="premium"> Access illimité </label>
        </div>

        <div className="pannelimage-url">
          <label htmlFor="image"> image </label>
          <input
            type="text"
            name="image"
            {...register("image", {
              required: " this field is required!",
            })}
          />
          {errors.image && <p> {errors.image.message}</p>}
        </div>

        <div className="pannelvideo-url">
          <label htmlFor="url"> url </label>
          <input
            type="text"
            name="url"
            {...register("url", {
              required: " this field is required!",
            })}
          />
          {errors.url && <p> {errors.url.message}</p>}
        </div>

        <button type="submit"> post video</button>
      </form>
    </section>
  );
}
