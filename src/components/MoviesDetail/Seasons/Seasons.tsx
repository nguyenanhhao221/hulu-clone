import React, { useState } from 'react';
import { TMovie } from '../../../../type';
import { SeasonCard } from './SeasonCard';
type Props = {
    seasons: TMovie['seasons'];
    showName?: string;
};
export const Seasons = ({ seasons, showName }: Props) => {
    const [hideCard, setHideCard] = useState<boolean>(true);
    if (seasons && seasons?.length > 0) {
        return (
            <section className="p-4 lg:px-10">
                <h2 className="section-title">Seasons</h2>
                <div className="flex flex-col items-center justify-evenly gap-5 lg:items-start">
                    {seasons?.map((season, index) => (
                        <SeasonCard
                            key={season.id}
                            showName={showName}
                            season={season}
                            index={index}
                            hideCard={hideCard}
                        ></SeasonCard>
                    ))}
                </div>
                <div>
                    <button
                        onClick={() => setHideCard(!hideCard)}
                        className={`${seasons.length >= 2 ? `` : `hidden`} ${
                            hideCard ? '``' : `hidden`
                        } group flex flex-row-reverse items-center justify-between gap-1 py-4 px-2 text-lg`}
                        type="button"
                    >
                        <span className="capitalize text-hulu-green group-hover:text-hulu-secondary">
                            view all seasons
                        </span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5 rounded-full border border-hulu-green group-hover:border-hulu-secondary group-hover:fill-gray-500"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <button
                        onClick={() => setHideCard(!hideCard)}
                        className={`${seasons.length >= 2 ? `` : `hidden`} ${
                            hideCard ? 'hidden' : ``
                        } group flex flex-row-reverse items-center justify-between gap-1 py-4 px-2 text-lg`}
                        type="button"
                    >
                        <span className="capitalize text-hulu-green group-hover:text-hulu-secondary">
                            Hide
                        </span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5 rounded-full border border-hulu-green group-hover:border-hulu-secondary group-hover:fill-gray-500"
                        >
                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                        </svg>
                    </button>
                </div>
            </section>
        );
    }
    return <></>;
};
