import { useSelector } from "react-redux";
import useFetchNowPlaying from "../hooks/useFetchNowPlaying";
import Header from "./Header";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const Browse = () => {
  useFetchNowPlaying();
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  const trailerMovie = movies?.[0];

  return (
    <div>
      <Header />
      <section className="primary-section relative">
        <VideoBackground movieId={trailerMovie?.id}></VideoBackground>
        <VideoTitle
          title={trailerMovie?.title}
          description={trailerMovie?.overview}
          rating={trailerMovie?.vote_average}
        ></VideoTitle>
      </section>
      <section className="secondary-section h-svh">
        
      SOME text
      </section>
    </div>
  );
};

export default Browse;
