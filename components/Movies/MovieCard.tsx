import { HandThumbUpIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { TMovie } from '../../type';

type Props = {
  movie: TMovie;
};
const MovieCard = ({ movie }: Props) => {
  // *This is to get the image from TMDB. Read more :https://developers.themoviedb.org/3/getting-started/images
  const BASE_URL = 'https://image.tmdb.org/t/p/original';
  return (
    <div className=" group z-50 max-w-md cursor-pointer space-y-2 overflow-hidden duration-300 ease-in-out  motion-safe:hover:scale-105">
      <Image
        width={1920}
        height={1080}
        layout="responsive"
        alt="thumbnail"
        objectFit="contain"
        src={
          `${BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
          `${BASE_URL}${movie.poster_path}`
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
          {movie.release_date && (
            <span className="text-gray-400 xl:opacity-0 xl:group-hover:opacity-100">
              {movie.release_date}
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
  );
};
export default MovieCard;
