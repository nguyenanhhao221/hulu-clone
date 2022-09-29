import { useRouter } from 'next/router';
import requests from '../../utilities/requests';

type Props = {};
const Navbar = (props: Props) => {
  const router = useRouter();
  return (
    <nav className="relative">
      <ul className="flex space-x-10 overflow-x-scroll whitespace-nowrap px-10 scrollbar-hide last:pr-24 sm:space-x-20 sm:px-20">
        {Object.entries(requests).map(([key, { title }]) => (
          <li
            key={key}
            className="transform cursor-pointer transition duration-100 hover:scale-125 active:text-red-500"
            onClick={(e) => router.push(`/?genre=${key}`)}
          >
            {title}
          </li>
        ))}
      </ul>
      <div className="absolute top-0 right-0 h-10 w-1/12 bg-gradient-to-l from-hulu-main"></div>
    </nav>
  );
};
export default Navbar;
