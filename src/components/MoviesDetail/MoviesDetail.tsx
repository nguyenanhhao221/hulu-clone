import Image from 'next/future/image';
import type { TMovie } from '../../../type';
import { BASE_IMAGE_URL } from '../../utilities/helpers';

type Props = { movie: TMovie; imageProps: any };
const MoviesDetail = ({ movie, imageProps }: Props) => {
  return (
    <>
      <div className="">
        <div className="relative">
          <Image
            {...imageProps}
            alt={`Backdrop for ${
              movie.original_title ? movie.original_title : 'movie'
            }`}
            className=" object-cover object-right w-full z-1 fill-red-700  blur-[1px]"
            sizes="100vw"
            placeholder="blur"
            quality={50}
          ></Image>
          <div className="w-full h-1/2 absolute inset-y-4">
            <Image
              src={`${BASE_IMAGE_URL}${movie.poster_path}`}
              alt={`Backdrop for ${
                movie.original_title ? movie.original_title : 'movie'
              }`}
              sizes={'33vw'}
              width={200}
              height={150}
              quality={100}
              className="object-contain z-10 w-[30%] min-h-min ml-12 shadow-2xl shadow-neutral-800 "
            ></Image>
          </div>
        </div>
        <p>{movie.overview}</p>
        <p>{movie.tagline}</p>
        <p>User score{movie.vote_average}</p>
        <ul>
          {movie.genres?.map((genre) => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <p>{`Visit homepage: ${movie.homepage}`}</p>
        <p>{`Release date: ${movie.release_date}`}</p>
        <p>{`Run Time : ${movie.runtime}`}</p>
      </div>
    </>
  );
};
export default MoviesDetail;
