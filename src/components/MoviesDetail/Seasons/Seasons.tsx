import React from 'react';
import { TMovie } from '../../../../type';
import { SeasonCard } from './SeasonCard';
type Props = {
    seasons: TMovie['seasons'];
};
export const Seasons = ({ seasons }: Props) => {
    if (seasons && seasons?.length > 0) {
        return (
            <section className="px-4 lg:px-10">
                <h2 className="section-title px-4">Seasons</h2>
                <div className="flex flex-col items-center justify-evenly gap-5 px-2 lg:items-start">
                    {seasons?.map((season, index) => (
                        <SeasonCard
                            key={season.id}
                            season={season}
                            index={index}
                        ></SeasonCard>
                    ))}
                </div>
            </section>
        );
    }
    return <></>;
};
