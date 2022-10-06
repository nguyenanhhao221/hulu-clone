import type { TImageProps, TMovie } from '../../../type';
import BackdropPoster from './BackdropPoster';
// import CastOverview from './CastOverView';
import MovieOverview from './MovieOverview';
//TODO fix type of imageProps
type Props = {
  movie: TMovie;
  backdropImagesProps: TImageProps;
  posterImagesProps: TImageProps;
};
const MoviesDetail = ({
  movie,
  backdropImagesProps,
  posterImagesProps,
}: Props) => {
  return (
    <main>
      <BackdropPoster
        original_title={movie.original_title}
        poster_path={movie.poster_path}
        backdrop_path={movie.backdrop_path}
        backdropImagesProps={backdropImagesProps}
        posterImagesProps={posterImagesProps}
      />
      <MovieOverview movie={movie}></MovieOverview>
      {/* <CastOverview></CastOverview> */}
    </main>
  );
};
export default MoviesDetail;
