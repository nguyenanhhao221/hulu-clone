import Image from 'next/future/image';
import type { TMovie } from '../../../type';
import { BASE_IMAGE_URL } from '../../utilities/helpers';
import MovieOverview from './MovieOverview';

type Props = { movie: TMovie; imageProps: any };
const MoviesDetail = ({ movie, imageProps }: Props) => {
  return (
    <main>
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
          <div className="w-full h-1/2 absolute inset-y-4 xl:inset-y-28">
            <Image
              src={`${BASE_IMAGE_URL}${movie.poster_path}`}
              alt={`Backdrop for ${
                movie.original_title ? movie.original_title : 'movie'
              }`}
              sizes={'33vw'}
              width={200}
              height={150}
              quality={100}
              className="object-contain z-10 w-[30%] min-h-min ml-12 shadow-2xl shadow-neutral-800"
            ></Image>
          </div>
        </div>
        <MovieOverview movie={movie}></MovieOverview>
      </div>
    </main>
  );
};
export default MoviesDetail;
