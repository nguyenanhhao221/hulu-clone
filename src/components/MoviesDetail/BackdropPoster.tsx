import Image from 'next/future/image';
import { TImageProps, TMovie } from '../../../type';
import DesktopMovieOverview from './DesktopMovieOverview';
import EmptyBackdrop from '../../../public/hulu-empty-backdrop.jpg';
import EmptyPoster from '../../../public/no-image-icon-23483.jpg';
type Props = {
  original_title?: string;
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
    <div className="relative w-full overflow-hidden">
      <div className="absolute h-full w-full">
        <Image
          alt={`Backdrop for ${original_title ? original_title : 'movie'}`}
          className=" object-cover object-center sm:object-right"
          src={backdropImagesProps ? backdropImagesProps.src : EmptyBackdrop}
          sizes="100vw"
          placeholder={backdropImagesProps ? 'blur' : 'empty'}
          blurDataURL={
            backdropImagesProps ? backdropImagesProps.blurDataURL : undefined
          }
          quality={100}
          priority
          fill
        ></Image>
      </div>
      <div className="relative grid grid-cols-2 place-items-center bg-gradient-to-br from-[rgb(0,0,0)] to-[rgb(0,0,0,0.5)] px-4 py-10 lg:grid-cols-[30%_70%] lg:gap-5 xl:gap-10 2xl:h-[80vh] 2xl:max-h-[100%]">
        <div className="flex w-full justify-end">
          <Image
            src={posterImagesProps ? posterImagesProps.src : EmptyPoster}
            width={300}
            height={500}
            blurDataURL={
              posterImagesProps ? posterImagesProps.blurDataURL : undefined
            }
            alt={`Poster for ${original_title ? original_title : 'movie'}`}
            sizes={'33vw'}
            quality={100}
            placeholder={posterImagesProps ? 'blur' : 'empty'}
            className={`shadow-neutral-800 h-full object-contain 
              object-center shadow-2xl ${!posterImagesProps && `opacity-0`}`}
          ></Image>
        </div>
        {/* Overview for when not in mobile view */}
        <DesktopMovieOverview movie={movie}></DesktopMovieOverview>
      </div>
    </div>
  );
}
export default BackdropPoster;
