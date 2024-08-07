
import { useLoaderData } from "react-router-dom";
import { BookMarkedIcon, SparklesIcon, Dices } from "lucide-react";
import HeroSlider from "../../components/HeroSlider/HeroSlider";
import SearchBar from "../../components/searchbar/SearchBar";
import VideoList from "../../components/videolist/VideoList";

import "./HomePage.css";

export default function HomePage() {
  const videoData = useLoaderData();

  const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i -= 1 ) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      // eslint-disable-next-line no-param-reassign
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }; 

  const newVideos = videoData.sort((a, b) => b.id - a.id).slice(0, 9);

  const randomVideos = shuffle(videoData).slice(0, 9);

  return (
    <>
      <h2>
        {"Featured "} <BookMarkedIcon color="#1FD360" strokeWidth={1.75} />
      </h2>
      <HeroSlider numberOfSlides={1} />

      <style>{"#heroSlide.swiper-slide {display: flex; justify-content: center}"}</style>

      <SearchBar />

      <h2 className="title-home">
        {"New videos "}
        <SparklesIcon color="#FFDF00" strokeWidth={1.75} />
      </h2>
      <VideoList videoData={newVideos} />
      <h2 className="title-home">
        {"Random videos "}
        <Dices color="#1FD360" strokeWidth={1.75} />
      </h2>
      <VideoList videoData={randomVideos} />
    </>
  );
}
