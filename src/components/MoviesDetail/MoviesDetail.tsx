import type { TImageProps, TMovie } from '../../../type';
import BackdropPoster from './BackdropPoster';
import DesktopMovieOverview from './MovieOverview';
// import CastOverview from './CastOverView';
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
        backdropImagesProps={backdropImagesProps}
        posterImagesProps={posterImagesProps}
        movie={movie}
      />
      <div className="lg:hidden">
        <DesktopMovieOverview movie={movie} />
      </div>

      {/* <CastOverview></CastOverview> */}
    </main>
  );
};
export default MoviesDetail;
