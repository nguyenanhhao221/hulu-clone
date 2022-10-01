import { useRouter } from 'next/router';
import { TMovie } from '../../type';
import MovieCard from './MovieCard';

type Props = {
  movies?: TMovie[];
};
const Movies = ({ movies }: Props) => {
  return (
    <main>
      <div className="grid flex-wrap justify-center gap-6 overflow-hidden p-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:flex">
        {movies?.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </main>
  );
};
export default Movies;
