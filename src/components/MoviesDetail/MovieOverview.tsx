import type { TMovie } from '../../../type';
import UserScore from '../Utils/UserScore';
import PlayTrailer from '../Utils/PlayTrailer';
import { convertTime } from '../../utilities/helpers';

type Props = { movie: TMovie };
const MovieOverview = ({ movie }: Props) => {
  return (
    <section className="Movie Detail py-2">
      <div className="space-y-4">
        <h2 className="text-center font-bold text-2xl ">
          {movie.original_title}{' '}
          <time className=" text-sm text-gray-300 font-light">{`(${movie.release_date?.substring(
            0,
            4
          )})`}</time>
        </h2>
        <div className="flex flex-row justify-around">
          <UserScore vote_average={movie.vote_average} />
          <div className="w-[1px] bg-green-900"></div>
          <PlayTrailer />
        </div>
        <div className="flex flex-col items-center space-y-4 py-4">
          <div className="flex space-x-4">
            <time>{`${movie.release_date} (US)`}</time>
            <time className="text-gray-300">{`${convertTime(
              Number(movie.runtime)
            )}`}</time>
          </div>
          <ul className="flex">
            {movie.genres?.map((genre, index, genreArr) => (
              //Add "," to each element except the last
              <ol className="px-1" key={genre.id}>
                {index === genreArr.length - 1
                  ? `${genre.name}`
                  : `${genre.name}, `}
              </ol>
            ))}
          </ul>
        </div>
        <div className="description px-4">
          <p className="italic text-gray-400">{movie.tagline}</p>
          <h3 className="text-lg font-semibold leading-10">Overview</h3>
          <p className=" tracking-wide font-light">{movie.overview}</p>
        </div>
        <div className="writer"></div>
        <p>{`Visit homepage: ${movie.homepage}`}</p>
      </div>
    </section>
  );
};
export default MovieOverview;
