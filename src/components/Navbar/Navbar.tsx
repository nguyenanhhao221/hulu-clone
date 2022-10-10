import Link from 'next/link';
import { useRouter } from 'next/router';
import { TGenre } from '../../../type';

type Props = {
    genres: TGenre[][];
};
const Navbar = ({ genres }: Props) => {
    const router = useRouter();
    const { category } = router.query;
    if (!genres) return <span>Genres Not Available</span>;
    let genre: TGenre[] = genres[0];
    if (category === 'tv') {
        genre = genres[1];
    }

    return (
        <nav className="relative">
            <ul className="flex space-x-10 overflow-x-scroll whitespace-nowrap px-4 scrollbar-hide sm:space-x-20 ">
                {genre?.map(({ name, id }) => (
                    <li
                        key={id}
                        className={`cursor-pointer text-gray-200 transition last:pr-24 hover:scale-125 hover:text-white active:text-hulu-green`}
                    >
                        <Link href={`/genres/${category}/${id}`} replace>
                            {name}
                        </Link>
                    </li>
                ))}
            </ul>
            {/* This will be used as the fade-out effect as can see in the last element */}
            <div className="absolute top-0 right-0 h-10 w-1/12 bg-gradient-to-l from-hulu-gradient-to "></div>
        </nav>
    );
};
export default Navbar;
