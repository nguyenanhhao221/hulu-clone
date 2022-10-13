import { HandThumbUpIcon } from '@heroicons/react/24/outline';
import Image from 'next/future/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { TMovie } from '../../../type';
type Props = {
    movie: TMovie;
    index: number;
};
const MovieCard = ({ movie, index }: Props) => {
    const { category } = useRouter().query;
    return (
        <Link href={`/watch/${category}/${movie.id}`}>
            <div className="group flex max-w-md cursor-pointer flex-col gap-2 overflow-hidden transition-all duration-300 ease-in-out motion-safe:hover:scale-105 motion-safe:focus:scale-105">
                <div
                    className={`relative overflow-hidden object-center ${
                        !movie.backdrop_path
                            ? `max-h-[180px] lg:max-h-[250px]`
                            : ``
                    } `}
                >
                    <Image
                        {...movie.imageProps}
                        className={`h-full w-full object-contain   ${
                            !movie.backdrop_path ? `h-full ` : ``
                        }  `}
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
                        {movie.name ||
                            movie.title ||
                            movie.original_name ||
                            movie.original_name}
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
