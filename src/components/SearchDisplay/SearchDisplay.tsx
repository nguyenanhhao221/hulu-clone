import { useQuery, UseQueryResult } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { TDataResponseTMDB } from '../../../type';
import { SearchTabs } from '../SearchTabs/SearchTabs';
import { SearchCard } from './SearchCard';
import NoContent from '../ErrorDisplay/NoContent';
import { useRouter } from 'next/router';
import { LoadContext } from '../../pages/_app';
import Loader from '../Utils/Loader';
const SearchDisplay = () => {
    const router = useRouter();
    const { loadingContext, setLoadingContext } = useContext(LoadContext);
    router.events?.on('routeChangeStart', () => {
        setLoadingContext(true);
    });
    router.events?.on('routeChangeComplete', () => {
        setLoadingContext(false);
    });
    router.events?.on('routeChangeError', () => {
        return <div>Fail to load</div>;
    });
    const { data }: UseQueryResult<TDataResponseTMDB> =
        useQuery<TDataResponseTMDB>(['searchMovies']);
    const [currentFilter, setCurrentFilter] = useState<'tv' | 'movie'>('movie');

    if (!data || data.results.length <= 0) {
        return <NoContent noSearchResult />;
    }

    const filteredData = data?.results.filter(
        (movie) => movie.media_type !== undefined
    );

    const totalTVShows = filteredData.filter(
        ({ media_type }) => media_type === 'tv'
    ).length;
    const totalMovies = filteredData.filter(
        ({ media_type }) => media_type === 'movie'
    ).length;

    const tabButtons: (
        | { id: 'tv'; total: number; value: string }
        | { id: 'movie'; total: number; value: string }
        | undefined
    )[] = Array.from(
        new Set(filteredData.map((movie) => movie.media_type))
    ).map((tab) => {
        if (tab === 'movie') {
            return {
                id: 'movie',
                total: totalMovies,
                value: 'Movies',
            };
        }
        if (tab === 'tv') {
            return { id: 'tv', total: totalTVShows, value: 'TV Shows' };
        }
        return tab;
    });
    return (
        <div className="flex flex-col items-center">
            <SearchTabs
                currentFilter={currentFilter}
                setCurrentFilter={setCurrentFilter}
                totalMovies={totalMovies}
                totalTVShows={totalTVShows}
                tabButtons={tabButtons}
            />
            {loadingContext ? (
                <Loader />
            ) : (
                <div className="mx-auto grid w-full grid-cols-1 place-items-center items-stretch gap-4 py-4">
                    {filteredData
                        .filter((movie) => movie.media_type === currentFilter)
                        .map((movie) => (
                            <SearchCard movie={movie} key={movie.id} />
                        ))}
                </div>
            )}
        </div>
    );
};

export { SearchDisplay };
