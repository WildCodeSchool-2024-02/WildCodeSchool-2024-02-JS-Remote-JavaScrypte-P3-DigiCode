/* eslint-disable react/jsx-props-no-spreading */
import axios from "axios";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import "./VideoPannel.css"

export default function VideoAdd() {
  const [categoryData, setCategoryData] = useState();
  const expressURL = import.meta.env.VITE_API_URL;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (uploadData) => {
    try {
      await axios
        .post(`${expressURL}/api/videos`, uploadData)
        .then(() => reset());
      toast.success("Video added successfully!");
    } catch (err) {
      if (err) toast.error("An error occured, please try again later");
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
      if (err) toast.error("Couldn't retrieve the categories");
    }
  }, []);

  const requiredFieldError = "This field is required !";

  return (
    <section>

      <form className="form-video-pannel" onSubmit={handleSubmit(onSubmit)}>
        <div className="input-form-video">
          <label htmlFor="name"> Title </label>
          <input
            type="text"
            name="title"
            {...register("title", {
              required: requiredFieldError,
              minLength: {
                value: 2,
                message: "You need at least 2 characters",
              },
            })}
          />
          {errors.title && <p> {errors.title.message}</p>}
        </div>
        <div className="input-form-video" id="description-video">
          <label htmlFor="description"> Description </label>
          <textarea
            type="text"
            name="description"
            {...register("description", {
              required: requiredFieldError,
              minLength: {
                value: 2,
                message: "You need at least 2 characters",
              },
            })}
          />
          {errors.description && <p> {errors.description.message}</p>}
        </div>

        <div className="input-form-video">
          <label htmlFor="category">Category </label>
          <select name="category" {...register("category_id")}>
            {categoryData?.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {`${cat.name.charAt(0).toUpperCase()}${cat.name.slice(1)}`}
              </option>
            ))}
          </select>
        </div>
        <div className="input-form-video">
          <label htmlFor="access"> Access : </label>
          <input
            type="radio"
            name="free"
            value="0"
            defaultChecked
            {...register("is_connected")}
          />
          <label htmlFor="free">Free</label>

          <input
            type="radio"
            name="premium"
            value="1"
            {...register("is_connected")}
          />
          <label htmlFor="premium">Premium</label>
        </div>

        <div className="input-form-video">
          <label htmlFor="image">Thumbnail</label>
          <input
            type="text"
            name="image"
            {...register("image", {
              required: requiredFieldError,
            })}
          />
          {errors.image && <p> {errors.image.message}</p>}
        </div>

        <div className="input-form-video">
          <label htmlFor="url">URL</label>
          <input
            type="text"
            name="url"
            {...register("url", {
              required: requiredFieldError,
            })}
          />
          {errors.url && <p> {errors.url.message}</p>}
        </div>

        <button type="submit" className="button-form-video">Post video</button>
      </form>
    </section>
  );
}
