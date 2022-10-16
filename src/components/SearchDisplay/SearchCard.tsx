import Image from 'next/future/image';
import React from 'react';
import type { TMovie } from '../../../type';
import { BASE_IMAGE_URL } from '../../utilities/helpers';
import EmptyIMG from '../../../public/no-image-icon-23483.jpg';
import Link from 'next/link';

type Props = {
    movie: TMovie;
};

export const SearchCard = ({ movie }: Props) => {
    const {
        backdrop_path,
        poster_path,
        title,
        overview,
        id,
        release_date,
        name,
        first_air_date,
        original_name,
        original_title,
        media_type,
    } = movie;
    const imageProps = poster_path || backdrop_path;
    return (
        <Link className="cursor-pointer" href={`/watch/${media_type}/${id}`}>
            <div className="min-h-44 flex w-[80%] cursor-pointer items-center gap-2 rounded-lg shadow-xl ring-1 ring-hulu-secondary ring-opacity-30 transition-transform hover:border-opacity-100 hover:ring-opacity-100 focus:ring-1 focus:ring-opacity-100 motion-safe:md:hover:scale-105">
                <Image
                    alt={`${movie.title || movie.original_title} logo`}
                    src={
                        imageProps ? `${BASE_IMAGE_URL}${imageProps}` : EmptyIMG
                    }
                    className="h-full max-h-60 w-full max-w-[100px] self-stretch rounded-lg  object-center"
                    width={100}
                    height={200}
                ></Image>
                <div className="flex flex-col justify-between py-2">
                    <div className="">
                        <h3 className="font-bold">
                            {title || original_title || name || original_name}
                        </h3>
                        <time className="text-sm text-slate-500">
                            {release_date || first_air_date || ''}
                        </time>
                    </div>
                    <p className="text-sm line-clamp-3">
                        {overview && overview}
                    </p>
                </div>
            </div>
        </Link>
    );
};
