import Image from 'next/future/image';
import { TImageProps, TMovie } from '../../../type';
import DesktopMovieOverview from './DesktopMovieOverView';
type Props = {
  original_title?: string;
  poster_path?: string;
  backdrop_path?: string | null;
  backdropImagesProps: TImageProps;
  posterImagesProps: TImageProps;
  movie: TMovie;
};
function BackdropPoster({
  original_title,
  backdropImagesProps,
  posterImagesProps,
  movie,
}: Props) {
  return (
    <div className="relative max-h-[60vh] overflow-hidden w-full md:max-h-[90vh] 2xl:max-h-[100vh] ">
      <div className="absolute z-0 w-full h-full ">
        <Image
          // {...backdropImagesProps}
          alt={`Backdrop for ${original_title ? original_title : 'movie'}`}
          className="object-right object-cover z-0"
          src={backdropImagesProps.src}
          sizes="100vw"
          placeholder="blur"
          blurDataURL={backdropImagesProps.blurDataURL}
          quality={100}
          fill
        ></Image>
      </div>
      <div className="lg:px-10 lg:py-20 lg:gap-5 xl:gap-10 relative justify-evenly max-h-[80%] grid grid-cols-[30%_70%] place-items-center bg-gradient-to-br from-black 2xl:max-h-[100%] 2xl:h-[80vh]">
        <div className="w-full flex justify-end">
          <Image
            src={posterImagesProps.src}
            width={300}
            height={500}
            blurDataURL={posterImagesProps.blurDataURL}
            alt={`Poster for ${original_title ? original_title : 'movie'}`}
            sizes={'33vw'}
            quality={100}
            placeholder="blur"
            className="object-contain object-center z-[1] 
              shadow-2xl h-full shadow-neutral-800"
          ></Image>
        </div>
        <DesktopMovieOverview movie={movie}></DesktopMovieOverview>
      </div>
    </div>
  );
}
export default BackdropPoster;
