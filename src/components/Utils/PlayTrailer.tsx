import React from 'react';
type Props = {
    showTrailer: boolean;
    setShowTrailer: React.Dispatch<React.SetStateAction<boolean>>;
    haveTrailers: boolean;
};
const PlayTrailer = ({ showTrailer, setShowTrailer, haveTrailers }: Props) => {
    return haveTrailers ? (
        <button
            onClick={() => setShowTrailer(!showTrailer)}
            type="button"
            className="group flex items-center gap-2"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6 group-hover:fill-hulu-green motion-safe:group-hover:animate-pulse motion-safe:group-active:animate-ping"
            >
                <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                    clipRule="evenodd"
                />
            </svg>
            <span className="group-hover:text-hulu-green ">Play trailer</span>
        </button>
    ) : (
        <></>
    );
};
export default PlayTrailer;
