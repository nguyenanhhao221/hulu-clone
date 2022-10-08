import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { TMovie } from '../../../type';
import NoContent from '../ErrorDisplay/NoContent';
import TabList from '../Utils/TabList';
import MovieCard from './MovieCard';
type Props = {
    movies?: TMovie[][];
};
const Movies = ({ movies }: Props) => {
    const [currentTab, setCurrentTab] = useState<string>('movie');
    const router = useRouter();
    const { category } = router.query;
    if (!movies) return <div>Service Problems</div>;
    let cardToRender: TMovie[] = movies[0];
    if (category === 'tv') {
        cardToRender = movies[1];
    }
    return (
        <>
            <TabList currentTab={currentTab} setCurrentTab={setCurrentTab} />
            <main>
                {cardToRender?.length === 0 && <NoContent />}
                <div className="grid flex-wrap justify-center gap-6 overflow-hidden p-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:flex">
                    {cardToRender?.map((movie, index) => (
                        <MovieCard movie={movie} key={movie.id} index={index} />
                    ))}
                </div>
            </main>
        </>
    );
};
export default Movies;
