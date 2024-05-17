import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { API_OPITONS } from "../utils/constants";

const useFetchNowPlaying = ()=>{
    const dispatch = useDispatch();
  
    useEffect(()=>{
      getNowPlayingMovies();
    },[])
  
    const getNowPlayingMovies = async()=> {
      const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', API_OPITONS);
      const movieList = await data.json();
      dispatch(addNowPlayingMovies(movieList.results))
    }
}

export default useFetchNowPlaying;