/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function VideoUpdate() {
  const [videoData, setVideoData] = useState();
  const expressURL = import.meta.env.VITE_API_URL;
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      axios
        .put(`${expressURL}/api/videos/${data.id}`, data)
        toast.success("Video access updated successfully ! ");
    } catch (err) {

      toast.err("An error occured, please try again later");
    }
    }


  useEffect(() => {
    const express = import.meta.env.VITE_API_URL;
    try {
      axios.get(`${express}/api/videos`).then((response) => {
        const {data} = response;
        setVideoData(data);
      });
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div> 
      <label htmlFor="videoUpdate"> Acces </label>
      <select name="videoupdate" {...register("id")}>
        {videoData?.map((v) => (
          <option key={v.id} value={v.id}>
            {`${v.title.charAt(0).toUpperCase()}${v.title.slice(1)}`}
          </option>
        ))}
      </select>
</div>
      <input type="radio" name="free" value="0" {...register("is_connected")} />

      <label htmlFor="acces"> Free </label>

      <input
        type="radio"
        name="premium"
        value="1"
        {...register("is_connected")}
      />
      <label htmlFor="acces"> Premium </label>
      <button type="submit"> Update Video</button>
    </form>
  );
}
