import { HandThumbUpIcon } from '@heroicons/react/24/outline';
import Image from 'next/future/image';
import Link from 'next/link';
import { useContext } from 'react';
import { TMovie } from '../../../type';
import CategoryContextProvider from '../CategoryContextProvider/CategoryContextProvider';
type Props = {
  movie: TMovie;
  index: number;
};
const MovieCard = ({ movie, index }: Props) => {
  // *This is to get the image from TMDB. Read more :https://developers.themoviedb.org/3/getting-started/images
  const { category } = useContext(CategoryContextProvider);
  return (
    <Link href={`/watch/${category}/${movie.id}`}>
      <div className="group z-50 max-w-md cursor-pointer space-y-2 overflow-hidden duration-300 ease-in-out  transition-all motion-safe:hover:scale-105 ">
        <div className="block object-contain">
          <Image
            {...movie.imageProps}
            className="overflow-hidden max-w-full max-h-[180px] object-contain object-center xl:max-h-[250px]"
            width={1920}
            height={1080}
            alt="thumbnail"
            placeholder={'blur'}
            sizes="100vw (min-width 640px) 50vw (min-width 768px) 33vw (min-width 1024px) 25vw "
            priority={index <= 7 ? true : undefined} //We load the first 6 image with priority to give better UX
          ></Image>
        </div>
        <div className="space-y-1">
          <p className="line-clamp-2 ">{movie.overview}</p>
          <h2 className="font-serif text-2xl tracking-wide transition-all duration-500 ease-in-out md:motion-safe:group-hover:font-extrabold">
            {movie.original_language === 'en'
              ? movie.original_title || movie.name
              : movie.title || movie.original_name}
          </h2>
          <p className="flex items-center justify-between">
            {movie.release_date ? (
              <span className="text-gray-400 xl:opacity-0 xl:group-hover:opacity-100">
                {movie.release_date}
              </span>
            ) : (
              <span className="text-gray-400 xl:opacity-0 xl:group-hover:opacity-100">
                {movie.first_air_date}
              </span>
            )}
            {movie.vote_count && (
              <span className="flex items-center text-gray-400 xl:opacity-0 xl:group-hover:opacity-100">
                <HandThumbUpIcon className=" mx-2 h-5" />
                {movie.vote_count}
              </span>
            )}
          </p>
        </div>
      </div>
    </Link>
  );
};
export default MovieCard;
