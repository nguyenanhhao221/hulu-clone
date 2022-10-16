import React, { useRef } from 'react';

type Props = {
    currentFilter: 'movie' | 'tv';
    setCurrentFilter: React.Dispatch<React.SetStateAction<'movie' | 'tv'>>;
    totalMovies?: number;
    totalTVShows?: number;
    tabButtons: (
        | { id: 'tv'; total: number; value: string }
        | { id: 'movie'; total: number; value: string }
        | undefined
    )[];
};

export const SearchTabs = ({
    tabButtons,
    currentFilter,
    setCurrentFilter,
}: Props) => {
    const btn = useRef(null);
    return (
        <div>
            <div className="tabs">
                {tabButtons.map(
                    (tab) =>
                        typeof tab !== 'undefined' && (
                            <button
                                type="button"
                                className={`tab tab-bordered pb-10 ${
                                    currentFilter === tab.id ? `tab-active` : ``
                                }`}
                                key={tab.id}
                                ref={btn}
                                onClick={() => setCurrentFilter(tab.id)}
                            >
                                <div className="flex justify-between gap-2">
                                    <span className="capitalize">
                                        {tab.value}
                                    </span>
                                    <span className="rounded-full px-3 ring-1 ring-hulu-secondary">
                                        {tab.total}
                                    </span>
                                </div>
                            </button>
                        )
                )}
            </div>
        </div>
    );
};
