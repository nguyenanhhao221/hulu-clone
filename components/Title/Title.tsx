import { useRouter } from 'next/router';
import type { TGenres } from '../../type';

type Props = {
  genres: TGenres;
};
const Title = ({ genres }: Props) => {
  const router = useRouter();
  const [title] = genres.filter((genre) => {
    //Because query is as string type and id genre is store as number
    return genre.id.toString() === router.query.id;
  });

  return (
    <h2 className="decoration-3 p-6 text-4xl font-bold tracking-wide underline decoration-hulu-green underline-offset-8">
      {title.name}
    </h2>
  );
};
export default Title;
