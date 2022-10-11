import UserScore from '../Utils/UserScore';
import PlayTrailer from '../Utils/PlayTrailer';
import { TMovie } from '../../../type';
import RunTime from './RunTime';
import Writers from './Writers';
import Link from 'next/link';
import { useRouter } from 'next/router';

type Props = { movie: TMovie };
const MovieOverview = ({ movie }: Props) => {
    const router = useRouter();
    const { category } = router.query;

    //Get the ageRating base on TV or Movie.
    const { release_dates, content_ratings } = movie;
    let ageRating: string | undefined = 'Unknown';
    if (release_dates) {
        ageRating = release_dates.results
            ?.find((release) => release.iso_3166_1?.toLowerCase() === 'us')
            ?.release_dates?.at(0)?.certification;
    }
    if (content_ratings) {
        ageRating = content_ratings.results?.at(0)?.rating;
    }

    return (
        <section className="Movie Detail z-20 place-self-start self-center py-4 lg:w-3/4">
            <div className="space-y-4 px-4">
                <h2 className="text-center text-2xl font-bold lg:text-left">
                    {movie.name ||
                        movie.title ||
                        movie.original_title ||
                        movie.original_name}{' '}
                    <time className=" text-sm font-light text-gray-300">{`(${
                        movie.release_date?.substring(0, 4) ||
                        movie.first_air_date?.substring(0, 4)
                    })`}</time>
                </h2>
                <div className="flex flex-row justify-around lg:justify-start lg:gap-10">
                    <UserScore vote_average={movie.vote_average} />
                    <div className="w-[1px] bg-green-900"></div>
                    <PlayTrailer />
                </div>
                <div className="flex flex-col items-center gap-4 space-y-4 py-4 lg:w-2/3 lg:items-start ">
                    <RunTime
                        release_date={movie.release_date}
                        first_air_date={movie.first_air_date}
                        runtime={movie.runtime}
                        episode_run_time={movie.episode_run_time}
                        next_episode_to_air={movie.next_episode_to_air}
                    />
                    <div className="flex flex-grow flex-col items-center gap-3 lg:flex-row lg:gap-1">
                        {!content_ratings && !release_dates ? (
                            ``
                        ) : (
                            <p
                                className={`${
                                    !ageRating && 'hidden'
                                } text-grey-300 whitespace-nowrap border px-1 opacity-60`}
                            >
                                {ageRating}
                            </p>
                        )}
                        <ul className="flex flex-wrap items-center justify-center text-center md:flex-row lg:w-full lg:justify-start">
                            {movie.genres?.map((genre, index, genreArr) => (
                                //Add "," to each element except the last
                                <li
                                    className="cursor-pointer px-1 hover:underline"
                                    key={genre.id}
                                >
                                    <Link
                                        href={`/genres/${category}/${genre.id}`}
                                    >
                                        {index === genreArr.length - 1
                                            ? `${genre.name}`
                                            : `${genre.name}, `}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="description">
                    <p className="italic text-gray-400">{movie.tagline}</p>
                    <h3 className="text-lg font-semibold leading-10">
                        Overview
                    </h3>
                    <p className="font-light tracking-wide">{movie.overview}</p>
                </div>
                <Writers
                    created_by={movie.created_by}
                    crew={movie.credits?.crew}
                />
                {/* <p>{`Visit homepage: ${movie.homepage}`}</p> */}
            </div>
        </section>
    );
};
export default MovieOverview;
