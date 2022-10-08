import React from 'react';
import { EpisodeToAir } from '../../../type';
import { convertTime } from '../../utilities/helpers';
type Props = {
    release_date?: string;
    first_air_date?: string;
    runtime?: string | number;
    next_episode_to_air?: EpisodeToAir;
    episode_run_time?: number[];
};
const RunTime = ({
    release_date,
    first_air_date,
    runtime,
    next_episode_to_air,
    episode_run_time,
}: Props) => {
    let showTime = Number(runtime) || Number(next_episode_to_air?.runtime);
    if (!showTime && episode_run_time) {
        if (episode_run_time.length <= 0) {
            return <></>;
        }
        const randomNum = Math.floor(Math.random() * episode_run_time.length);
        showTime = episode_run_time[randomNum];
    }
    return (
        <div className="flex space-x-4">
            <time className="flex items-center gap-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                        clipRule="evenodd"
                    />
                </svg>

                {`${release_date || first_air_date}`}
            </time>
            <time className="flex items-center gap-1 text-gray-300">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5 fill-gray-400"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z"
                        clipRule="evenodd"
                    />
                </svg>

                <span>{`${convertTime(showTime)}`}</span>
            </time>
        </div>
    );
};

export default RunTime;
