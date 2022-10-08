import { useRouter } from 'next/router';
import type { TGenre } from '../../../type';

type Props = {
    genres: TGenre[][];
};
const Title = ({ genres }: Props) => {
    const router = useRouter();
    if (!genres) return <>Error</>;
    const [title] = genres.flat(1).filter((genre) => {
        //Because query is as string type and id genre is store as number
        return genre.id.toString() === router.query.id;
    });

    return (
        <h2 className="decoration-3 p-6 text-center text-3xl font-bold tracking-wide underline decoration-hulu-green underline-offset-8 md:text-left">
            {title?.name}
        </h2>
    );
};
export default Title;
