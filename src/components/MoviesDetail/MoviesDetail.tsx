import type { TMovie } from '../../../type';
import BackdropPoster from './BackdropPoster';
import CastOverview from './CastOverView';
import MovieOverview from './MovieOverview';
//TODO fix type of imageProps
type Props = { movie: TMovie; imageProps: any };
const MoviesDetail = ({ movie, imageProps }: Props) => {
  return (
    <main>
      <BackdropPoster
        original_title={movie.original_title}
        poster_path={movie.poster_path}
        backdrop_path={movie.backdrop_path}
        imageProps={imageProps}
      />
      <MovieOverview movie={movie}></MovieOverview>
      <CastOverview></CastOverview>
    </main>
  );
};
export default MoviesDetail;
