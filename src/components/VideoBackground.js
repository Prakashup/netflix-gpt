import { useSelector } from "react-redux";
import useFetchMovieTrailor from "../hooks/useFetchMovieTrailor";

const VideoBackground = ({ movieId }) => {
  useFetchMovieTrailor(movieId);
  const movieTrailor = useSelector(state => state.movies.trailerVideo
  )
 
  return (
    <div className="trailer-video">
      <iframe
        src={"https://www.youtube.com/embed/" + movieTrailor?.key+"?autoplay=1&mute=1" }
        title=" "
        allow="autoplay;"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
