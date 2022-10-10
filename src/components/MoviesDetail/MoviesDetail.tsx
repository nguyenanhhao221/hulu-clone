import type { TImageProps, TMovie } from '../../../type';
import BackdropPoster from './BackdropPoster';
import MovieOverview from './MovieOverview';
// import CastOverview from './CastOverView';

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
                <MovieOverview movie={movie} />
            </div>

            {/* <CastOverview></CastOverview> */}
        </main>
    );
};
export default MoviesDetail;
