import { HandThumbUpIcon } from '@heroicons/react/24/outline';
import Image from 'next/future/image';
import Link from 'next/link';
import { TMovie } from '../../../type';
import { BASE_IMAGE_URL } from '../../utilities/helpers';

type Props = {
  movie: TMovie;
  index: number;
};
const MovieCard = ({ movie, index }: Props) => {
  // *This is to get the image from TMDB. Read more :https://developers.themoviedb.org/3/getting-started/images

  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="group z-50 max-w-md cursor-pointer space-y-2 overflow-hidden duration-300 ease-in-out  motion-safe:hover:scale-105">
        <Image
          className="h-auto max-w-full object-contain"
          width={1920}
          height={1080}
          alt="thumbnail"
          placeholder="blur"
          sizes="100vw (min-width 640px) 50vw (min-width 768px) 33vw (min-width 1024px) 25vw "
          priority={index <= 7 ? true : undefined} //We load the first 6 image with priority to give better UX
          blurDataURL={
            `${BASE_IMAGE_URL}${movie.backdrop_path || movie.poster_path}` ||
            `${BASE_IMAGE_URL}${movie.poster_path}`
          }
          src={
            `${BASE_IMAGE_URL}${movie.backdrop_path || movie.poster_path}` ||
            `${BASE_IMAGE_URL}${movie.poster_path}`
          }
        ></Image>
        <div className="space-y-1">
          <p className="truncate ">{movie.overview}</p>
          <h2 className="font-serif text-2xl tracking-wide transition-all duration-500 ease-in-out motion-safe:group-hover:font-extrabold">
            {movie.original_language === 'en'
              ? movie.original_title
              : movie.title}
          </h2>
          <p className="flex items-center justify-between">
            {movie.release_date ? (
              <span className="text-gray-400 xl:opacity-0 xl:group-hover:opacity-100">
                {movie.release_date}
              </span>)
              : (<span className="text-gray-400 xl:opacity-0 xl:group-hover:opacity-100">
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
