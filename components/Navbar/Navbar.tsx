import { useRouter } from 'next/router';
import { TGenres } from '../../type';

type Props = {
  genres: TGenres;
};
const Navbar = ({ genres }: Props) => {
  const router = useRouter();
  return (
    <nav className="relative">
      <ul className="flex space-x-10 overflow-x-scroll whitespace-nowrap px-4 scrollbar-hide last:pr-24 sm:space-x-20">
        <li
          key={'Top Rated'}
          className="cursor-pointer text-gray-200 transition hover:scale-125
          hover:text-white active:text-red-500"
        ></li>
        <li
          key={'Top Trending'}
          className="cursor-pointer text-gray-200 transition hover:scale-125
          hover:text-white active:text-red-500"
        >
          Top Trending
        </li>
        {genres?.map(({ name, id }) => (
          <li
            key={id}
            className="cursor-pointer text-gray-200 transition hover:scale-125 hover:text-white active:text-red-500"
            onClick={(e) => router.push(`/genres/${id}`)}
          >
            {name}
          </li>
        ))}
      </ul>
      {/* This will be used as the fade-out effect as can see in the last element */}
      <div className="absolute top-0 right-0 h-10 w-1/12 bg-gradient-to-l from-hulu-main"></div>
    </nav>
  );
};
export default Navbar;
