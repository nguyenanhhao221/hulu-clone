import UserScore from '../Utils/UserScore';
import PlayTrailer from '../Utils/PlayTrailer';
import { TMovie } from '../../../type';
import RunTime from './RunTime';

type Props = { movie: TMovie };
const DesktopMovieOverview = ({ movie }: Props) => {
  return (
    <section className="Movie Detail z-[20] py-2 hidden lg:block w-3/4 self-center">
      <div className="space-y-4">
        <h2 className="font-bold text-2xl ">
          {movie.original_title || movie.original_name}{' '}
          <time className=" text-sm text-gray-300 font-light">{`(${
            movie.release_date?.substring(0, 4) ||
            movie.first_air_date?.substring(0, 4)
          })`}</time>
        </h2>
        <div className="flex flex-row gap-10">
          <UserScore vote_average={movie.vote_average} />
          <div className="w-[1px] bg-green-900"></div>
          <PlayTrailer />
        </div>
        <div className="flex flex-col space-y-4 py-4">
          <RunTime
            release_date={movie.release_date}
            first_air_date={movie.first_air_date}
            runtime={movie.runtime}
            episode_run_time={movie.episode_run_time}
            next_episode_to_air={movie.next_episode_to_air}
          />
          <ul className="flex items-center text-center md:flex-row">
            {movie.genres?.map((genre, index, genreArr) => (
              //Add "," to each element except the last
              <li className="px-1" key={genre.id}>
                {index === genreArr.length - 1
                  ? `${genre.name}`
                  : `${genre.name}, `}
              </li>
            ))}
          </ul>
        </div>
        <div className="description">
          <p className="italic text-gray-400">{movie.tagline}</p>
          <h3 className="text-lg font-semibold leading-10">Overview</h3>
          <p className="tracking-wide font-light">{movie.overview}</p>
        </div>
        <div className="writer"></div>
        <p>{`Visit homepage: ${movie.homepage}`}</p>
      </div>
    </section>
  );
};
export default DesktopMovieOverview;
