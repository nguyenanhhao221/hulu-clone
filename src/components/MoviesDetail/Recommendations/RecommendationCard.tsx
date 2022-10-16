import Image from 'next/future/image';
import Link from 'next/link';
import React from 'react';
import { TMovie } from '../../../../type';
import { BASE_IMAGE_URL } from '../../../utilities/helpers';
import HuLuEmpty from '../../../../public/hulu-empty-backdrop.jpg';
import { useRouter } from 'next/router';
import RunTime from '../MoviesOverview/RunTime';
import UserScore from '../../Utils/UserScore';
type Props = {
    movie: TMovie;
};

export const RecommendationCard = ({ movie }: Props) => {
    const router = useRouter();
    const { category } = router.query;
    const {
        backdrop_path,
        name,
        title,
        overview,
        id,
        release_date,
        first_air_date,
        vote_average,
    } = movie;
    return (
        <Link className="cursor-pointer" href={`/watch/${category}/${id}`}>
            <div className="motion-safe:md::hover:scale-105 flex flex-col gap-4 rounded-lg  pb-4 shadow-xl ring-1 ring-hulu-secondary ring-opacity-30 transition-transform hover:border-opacity-100 hover:ring-opacity-100 focus:ring-1 focus:ring-opacity-100">
                <div>
                    <Image
                        src={
                            backdrop_path
                                ? `${BASE_IMAGE_URL}${backdrop_path}`
                                : HuLuEmpty
                        }
                        alt={`${name}`}
                        height="200"
                        width="300"
                        sizes="(min-width: 768px) 50vw,
                    (min-width: 1024px) 33vw,
                    100vw"
                        className={`h-auto w-full rounded-lg`}
                    ></Image>
                </div>
                <div className="flex flex-grow flex-col px-2">
                    <p className="text-xl font-bold">{name || title}</p>
                    <p className="py-2 text-sm">{overview}</p>
                </div>
                <div className="flex items-center justify-between px-2">
                    <RunTime
                        release_date={release_date}
                        first_air_date={first_air_date}
                    />
                    <UserScore vote_average={vote_average} showText={false} />
                </div>
            </div>
        </Link>
    );
};
