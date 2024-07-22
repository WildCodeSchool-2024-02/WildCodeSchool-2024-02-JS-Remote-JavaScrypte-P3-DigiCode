import { useLoaderData } from "react-router-dom";

import HeroSlider from "../../components/HeroSlider/HeroSlider";
import SearchBar from "../../components/searchbar/SearchBar";
import VideoList from "../../components/videolist/VideoList";

import "./HomePage.css";

export default function HomePage() {
  const videoData = useLoaderData();

  const newVideos = videoData.sort((a, b) => b.id - a.id).slice(0, 9);

  return (
    <>
      <HeroSlider />

      <SearchBar />

      <h2>New videos</h2>
      <VideoList videoData={newVideos} />
    </>
  );
}
