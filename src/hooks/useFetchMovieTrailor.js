import { useEffect } from "react";
import { API_OPITONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";

const useFetchMovieTrailor = (movieId) => {
   const URL = `https://api.themoviedb.org/3/movie/693134/videos`;
  const dispatch = useDispatch();
  useEffect(() => {
    fetchMovieVideo();
  }, []);

  const fetchMovieVideo = async () => {
    const videos = await fetch(URL,API_OPITONS);
    const jsonData = await videos.json();
    console.log("json", jsonData)
    const filterTrailorVideo = jsonData.results?.filter(
      (item) => item.type === "Trailer"
    );
    const trailor = filterTrailorVideo?.length ? filterTrailorVideo[0] : jsonData?.results[0];
    dispatch(addTrailerVideo(trailor));
  };
  
};

export default useFetchMovieTrailor;
