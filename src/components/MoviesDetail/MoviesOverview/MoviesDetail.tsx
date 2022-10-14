import React from 'react';
import type { TImageProps, TMovie } from '../../../../type';
import BackdropPoster from '../BackdropPoster/BackdropPoster';
import MovieOverview from './MovieOverview';
import CastOverview from '../Casts/CastOverview';
import { useRouter } from 'next/router';
import { Seasons } from '../Seasons/Seasons';
import { Trailers } from '../Trailers/Trailers';
import { useState, useContext } from 'react';
import Loader from '../../Utils/Loader';
import { LoadContext } from '../../../pages/_app';

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
    const [showTrailer, setShowTrailer] = useState<boolean>(false);
    //Context for loading state when route changes
    const { loadingContext, setLoadingContext } = useContext(LoadContext);
    //State for open the Trailer popup
    router.events?.on('routeChangeStart', () => {
        setLoadingContext(true);
    });
    router.events?.on('routeChangeComplete', () => {
        setLoadingContext(false);
    });
    router.events?.on('routeChangeError', () => {
        return <div>Fail to load</div>;
    });

    if (loadingContext) return <Loader />;
    return (
        <main>
            <BackdropPoster
                original_title={movie.original_title}
                backdropImagesProps={backdropImagesProps}
                posterImagesProps={posterImagesProps}
                movie={movie}
                showTrailer={showTrailer}
                setShowTrailer={setShowTrailer}
            />
            <div className="lg:hidden">
                <MovieOverview
                    showTrailer={showTrailer}
                    setShowTrailer={setShowTrailer}
                    movie={movie}
                />
            </div>

            <CastOverview
                cast={
                    category === 'movie'
                        ? movie.credits?.cast
                        : movie.aggregate_credits?.cast
                }
            ></CastOverview>
            <Seasons seasons={movie?.seasons} showName={movie?.name} />
            <Trailers
                showTrailer={showTrailer}
                setShowTrailer={setShowTrailer}
                videos={movie.videos}
            />
        </main>
    );
};
export default MoviesDetail;
