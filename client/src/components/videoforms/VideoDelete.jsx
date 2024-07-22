/* eslint-disable react/jsx-props-no-spreading */
import axios from "axios";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export default function VideoDelete() {
  const [videoData, setVideoData] = useState();
  const expressURL = import.meta.env.VITE_API_URL;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios
        .delete(`${expressURL}/api/videos/${data.id}`, data)
        .then(() => console.info("Video deleted :", data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const express = import.meta.env.VITE_API_URL;
    try {
      axios.get(`${express}/api/videos`).then((response) => {
        const { data } = response;
        setVideoData(data);
      });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <section>
      <h2>Delete a video</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="videodelete"> Category </label>
          <select name="videodelete" {...register("id")}>
            {videoData?.map((video) => (
              <option key={video.id} value={video.id}>
                {`${video.title.charAt(0).toUpperCase()}${video.title.slice(1)}`}
              </option>
            ))}
            {errors.id && <p>{errors.id.message}</p>}
          </select>
        </div>
        <button type="submit"> Delete video</button>
      </form>
    </section>
  );
}