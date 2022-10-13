import React from 'react';
import { TMovie } from '../../../../type';
type Props = {
    videos?: TMovie['videos'];
    setShowTrailer: React.Dispatch<React.SetStateAction<boolean>>;
    showTrailer: boolean;
};
const Trailers = ({ videos, setShowTrailer, showTrailer }: Props) => {
    if (!showTrailer) return <></>;
    const handleClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.currentTarget.id !== 'youtube-container' && setShowTrailer(false);
    };
    return (
        <>
            <div
                className={`fixed inset-0 z-10 flex items-center justify-center px-4 backdrop-blur-sm backdrop-grayscale lg:px-20`}
                onClick={(e) => handleClose(e)}
            >
                <div
                    className="flex aspect-video max-h-[90vh] w-full max-w-[1400px] flex-col items-center bg-hulu-black p-2"
                    id="youtube-container"
                >
                    <button
                        type="button"
                        title="Close trailer pop up"
                        className="place-self-end "
                        onClick={() => setShowTrailer(false)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    <iframe
                        className="h-full w-full object-contain object-center"
                        width="100%"
                        height="315"
                        src={`https://www.youtube-nocookie.com/embed/${videos?.results[0].key}?autoplay=1`}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </>
    );
};

export { Trailers };
