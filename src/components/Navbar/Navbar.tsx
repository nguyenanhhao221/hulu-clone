import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import { TGenre } from '../../../type';
import { ScrollButtons } from '../Utils/ScrollButtons';

type Props = {
    genres: TGenre[][];
};
const Navbar = ({ genres }: Props) => {
    const router = useRouter();
    const navListRef = useRef<HTMLUListElement>(null);
    const { category } = router.query;
    if (!genres) return <span>Genres Not Available</span>;
    let genre: TGenre[] = genres[0];
    if (category === 'tv') {
        genre = genres[1];
    }

    return (
        <nav className="group relative">
            <ul
                ref={navListRef}
                className="navLinkRef flex snap-x space-x-10 overflow-x-scroll scroll-smooth whitespace-nowrap px-4 scrollbar-hide sm:space-x-20 "
            >
                {genre?.map(({ name, id }) => (
                    <li
                        key={id}
                        className={`cursor-pointer  snap-end text-gray-200 transition last:pr-24 hover:scale-125 hover:text-white active:text-hulu-green`}
                    >
                        <Link href={`/genres/${category}/${id}`} replace>
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
            {/* This will be used as the fade-out effect as can see in the last element */}
            <ScrollButtons listRef={navListRef} />
        </nav>
    );
};
export default Navbar;
