import Link from 'next/link';
import { useRouter } from 'next/router';
import { TGenres } from '../../type';

type Props = {
  genres: TGenres;
};
const Navbar = ({ genres }: Props) => {
  return (
    <nav className="relative">
      <ul className="flex space-x-10 overflow-x-scroll whitespace-nowrap px-4 scrollbar-hide last:pr-24 sm:space-x-20">
        {genres?.map(({ name, id }) => (
          <li
            key={id}
            className="cursor-pointer text-gray-200 transition hover:scale-125 hover:text-white active:text-red-500"
          >
            <Link href={`/genres/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      {/* This will be used as the fade-out effect as can see in the last element */}
      <div className="absolute top-0 right-0 h-10 w-1/12 bg-gradient-to-l from-hulu-main"></div>
    </nav>
  );
};
export default Navbar;
