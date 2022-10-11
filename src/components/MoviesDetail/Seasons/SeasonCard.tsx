import Image from 'next/future/image';
import React from 'react';
import { TSeason } from '../../../../type';
import { BASE_IMAGE_URL } from '../../../utilities/helpers';
import EmptyIMG from '../../../../public/no-image-icon-23483.jpg';

type Props = {
    season?: TSeason;
    index: number;
};

export const SeasonCard = ({ season, index }: Props) => {
    if (!season) return <></>;
    const { name, air_date, episode_count, overview, poster_path } = season;
    return (
        <div
            className={`${
                index > 5 ? 'hidden' : ''
            } group flex w-full flex-col-reverse items-center gap-2 overflow-hidden rounded-xl border border-hulu-main border-opacity-50 shadow-2xl md:flex-row md:justify-between lg:max-w-[80%]`}
        >
            <div className="px-2 md:basis-2/3">
                <h4 className="text-lg font-bold tracking-wide">
                    {name && name}
                </h4>
                <ol className="flex flex-row gap-6">
                    <li>
                        <time className="font-bold">
                            {air_date && air_date?.substring(0, 4)}
                        </time>
                    </li>

                    <li className="list-outside list-disc">
                        <p className="font-bold">
                            {episode_count &&
                                (episode_count >= 2
                                    ? `${episode_count} Episodes`
                                    : `Episode`)}
                        </p>
                    </li>
                </ol>
                <p className="py-4 text-sm lg:text-base">{overview}</p>
            </div>
            <div className="w-full overflow-hidden md:w-fit">
                <Image
                    className="h-full w-full rounded-xl object-cover object-center"
                    src={
                        poster_path
                            ? `${BASE_IMAGE_URL}${poster_path}`
                            : EmptyIMG
                    }
                    width={300}
                    height={200}
                    placeholder={!poster_path ? `blur` : `empty`}
                    alt={`${name && name} Poster`}
                />
            </div>
        </div>
    );
};
