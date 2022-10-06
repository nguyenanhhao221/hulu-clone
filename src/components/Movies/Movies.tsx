import React, { useState } from 'react';
import { TMovie } from '../../../type';
import TabList from '../Utils/TabList';
import MovieCard from './MovieCard';
type Props = {
  movies?: TMovie[][];
};
const Movies = ({ movies }: Props) => {
  const [currentTab, setCurrentTab] = useState<string>('movie');
  let cardToRender;
  if (!movies) return <div>Service Problems</div>;
  switch (currentTab) {
    case 'movie':
      cardToRender = movies[0];
      break;
    case 'tv':
      cardToRender = movies[1];
      break;
    default:
      break;
  }
  return (
    <>
      <TabList currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <main>
        <div className="grid flex-wrap justify-center gap-6 overflow-hidden p-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 3xl:flex">
          {cardToRender?.map((movie, index) => (
            <MovieCard movie={movie} key={movie.id} index={index} />
          ))}
        </div>
      </main>
    </>
  );
};
export default Movies;
