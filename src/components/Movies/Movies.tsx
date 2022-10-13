import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { TMovie } from '../../../type';
import { LoadContext } from '../../pages/_app';
import NoContent from '../ErrorDisplay/NoContent';
import Loader from '../Utils/Loader';
import TabList from '../Utils/TabList';
import MovieCard from './MovieCard';
type Props = {
    movies?: TMovie[][];
};
const Movies = ({ movies }: Props) => {
    const router = useRouter();
    const { loadingContext, setLoadingContext } = useContext(LoadContext);
    const { category } = router.query;
    const [currentTab, setCurrentTab] = useState(category);
    router.events?.on('routeChangeStart', () => {
        setLoadingContext(true);
    });
    router.events?.on('routeChangeComplete', () => {
        setLoadingContext(false);
    });
    router.events?.on('routeChangeError', () => {
        return <div>Fail to load</div>;
    });
    if (!movies) return <div>Service Problems</div>;
    let cardToRender: TMovie[] = movies[0];
    if (category === 'tv') {
        cardToRender = movies[1];
    }
    return (
        <>
            <TabList currentTab={currentTab} setCurrentTab={setCurrentTab} />
            {loadingContext ? (
                <Loader />
            ) : (
                <div>
                    {' '}
                    <main>
                        {cardToRender?.length === 0 && <NoContent />}
                        <div className="grid flex-wrap justify-center gap-6 overflow-hidden p-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:flex">
                            {cardToRender?.map((movie, index) => (
                                <MovieCard
                                    movie={movie}
                                    key={movie.id}
                                    index={index}
                                />
                            ))}
                        </div>
                    </main>
                </div>
            )}
        </>
    );
};
export default Movies;
