import React from 'react';
import type { TImageProps, TMovie } from '../../../type';
import BackdropPoster from './BackdropPoster';
import MovieOverview from './MovieOverview';
import CastOverview from './CastOverview';
import { useRouter } from 'next/router';
import { Seasons } from './Seasons/Seasons';
import { Trailers } from './Trailers/Trailers';
import { useState } from 'react';

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
    //State for open the Trailer popup
    const [showTrailer, setShowTrailer] = useState<boolean>(false);
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
