import React from 'react';

type Props = {
    listRef: React.RefObject<HTMLUListElement>;
};

export const ScrollButtons = ({ listRef }: Props) => {
    const handleClickScroll = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        if (listRef.current !== null) {
            e.currentTarget.value === 'right'
                ? (listRef.current.scrollLeft += 100)
                : (listRef.current.scrollLeft -= 100);
            return;
        }
        return;
    };
    return (
        <>
            <div className="absolute top-0 bottom-0 right-0 flex w-8 items-center justify-center bg-gradient-to-l from-hulu-gradient-to transition-all  group-hover:bg-gradient-to-b group-hover:from-[hsla(0,0%,8%,.4)] group-focus:bg-gradient-to-b">
                <button
                    type="button"
                    value={'right'}
                    title="Scroll right for more cast"
                    className="invisible basis-1/2 align-middle group-hover:visible group-focus:visible"
                    onClick={(e) => {
                        handleClickScroll(e);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-8 w-8 stroke-gray-500 group-hover:stroke-current"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </button>
            </div>
            <div className="absolute top-0 bottom-0 -left-2 flex w-8 items-center justify-center bg-gradient-to-r from-hulu-gradient-from transition-all   group-hover:bg-gradient-to-b group-focus:bg-gradient-to-b">
                <button
                    type="button"
                    value={'left'}
                    title="Scroll right for more cast"
                    className="invisible basis-1/2 group-hover:visible group-focus:visible"
                    onClick={(e) => {
                        handleClickScroll(e);
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-8 w-8 stroke-gray-500 group-hover:stroke-current"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                    </svg>
                </button>
            </div>
        </>
    );
};
