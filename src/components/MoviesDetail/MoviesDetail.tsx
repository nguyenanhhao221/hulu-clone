import type { TImageProps, TMovie } from '../../../type';
import BackdropPoster from './BackdropPoster';
import MovieOverview from './MovieOverview';
import CastOverview from './CastOverview';
import { useRouter } from 'next/router';

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
    const router = useRouter();
    const { category } = router.query;

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

            <CastOverview
                cast={
                    category === 'movie'
                        ? movie.credits?.cast
                        : movie.aggregate_credits?.cast
                }
            ></CastOverview>
        </main>
    );
};
export default MoviesDetail;
