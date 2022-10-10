import Image from 'next/future/image';
import React from 'react';
import { TCast } from '../../../type';

import { BASE_IMAGE_URL } from '../../utilities/helpers';
import MovieCard from '../Movies/MovieCard';
type Props = { topCastMember: TCast };

const CastCard = ({ topCastMember }: Props) => {
    return (
        <>
            <div className="relative w-36 overflow-hidden rounded-lg">
                <Image
                    src={`${BASE_IMAGE_URL}${topCastMember.profile_path}`}
                    alt={`${topCastMember.name}`}
                    height={135}
                    width={120}
                    className="h-full w-full object-cover "
                />
            </div>
            <div className="px-2 text-sm">
                <p className="font-bold">{topCastMember.name}</p>
                <p className="text-sm">{topCastMember.character}</p>
                <p>
                    {topCastMember?.roles
                        ?.map((role) => role.character)
                        .join(', ')}
                </p>
                <p className="text-gray-400">
                    {topCastMember.total_episode_count &&
                        (topCastMember.total_episode_count >= 2
                            ? `${topCastMember.total_episode_count} Episodes`
                            : `${topCastMember.total_episode_count} Episode`)}
                </p>
            </div>
        </>
    );
};

export default CastCard;
