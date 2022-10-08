import Link from 'next/link';
import { useContext } from 'react';
import { TGenre } from '../../../type';
import CategoryContextProvider from '../CategoryContextProvider/CategoryContextProvider';

type Props = {
  genres: TGenre[][];
};
const Navbar = ({ genres }: Props) => {
  //We base the Navbar depends on the category, anytime this category changes, Navbar will need to update to match all the genres available in that category.
  const { category } = useContext(CategoryContextProvider);
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
            className="cursor-pointer text-gray-200 transition last:pr-24 hover:scale-125 hover:text-white active:text-red-500"
          >
            <Link href={`/genres/${category}/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      {/* This will be used as the fade-out effect as can see in the last element */}
      <div className="absolute top-0 right-0 h-10 w-1/12 bg-gradient-to-l from-hulu-main"></div>
    </nav>
  );
};
export default Navbar;
