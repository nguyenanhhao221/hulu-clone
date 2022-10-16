import React from 'react';
import { TMovie } from '../../../../type';
import { RecommendationCard } from './RecommendationCard';
type Props = {
    recommendations?: TMovie['recommendations'];
};

export const Recommendations = ({ recommendations }: Props) => {
    if (recommendations?.results && recommendations.results?.length <= 0)
        return <></>;
    return (
        <section className="p-4 lg:px-10">
            <h2 className="section-title">Recommendation Shows</h2>
            <div className="group grid cursor-pointer grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
                {recommendations?.results?.map((recommendation) => (
                    <RecommendationCard
                        key={recommendation.id}
                        movie={recommendation}
                    />
                ))}
            </div>
        </section>
    );
};
