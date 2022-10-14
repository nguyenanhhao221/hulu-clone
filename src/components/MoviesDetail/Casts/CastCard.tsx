import Image from 'next/future/image';
import React from 'react';
import { TCast } from '../../../../type';

import { BASE_IMAGE_URL } from '../../../utilities/helpers';
import EmptyIMG from '../../../public/no-image-icon-23483.jpg';
type Props = { topCastMember: TCast };

const CastCard = ({ topCastMember }: Props) => {
    return (
        <>
            <div
                className={`${!topCastMember.profile_path && ``}
                        relative w-36 overflow-hidden
                    rounded-lg ${
                        topCastMember.profile_path ? `` : `basis-[216px]`
                    }`}
            >
                <Image
                    src={
                        topCastMember.profile_path
                            ? `${BASE_IMAGE_URL}${topCastMember.profile_path}`
                            : EmptyIMG
                    }
                    className={`h-full w-full object-contain`}
                    alt={`${topCastMember.name}`}
                    height={135}
                    sizes={'15vw'}
                    width={120}
                />
            </div>
            <div className="px-2 text-sm">
                <p className="font-bold">{topCastMember.name}</p>
                <p className="text-sm">{topCastMember.character}</p>
                <p className="line-clamp-6">
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
