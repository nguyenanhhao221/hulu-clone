import Image from 'next/future/image';
import { TImageProps } from '../../../type';
type Props = {
  original_title?: string;
  poster_path?: string;
  backdrop_path?: string | null;
  backdropImagesProps: TImageProps;
  posterImagesProps: TImageProps;
};
function BackdropPoster({
  original_title,
  backdropImagesProps,
  posterImagesProps,
}: Props) {
  return (
    <div className="relative">
      <Image
        {...backdropImagesProps}
        alt={`Backdrop for ${original_title ? original_title : 'movie'}`}
        className=" object-cover object-right w-full z-1 fill-red-700  blur-[0.5px]"
        sizes="100vw"
        placeholder="blur"
        quality={100}
      ></Image>
      <div className="w-full h-1/2 absolute inset-y-4 xl:inset-y-28">
        <Image
          {...posterImagesProps}
          alt={`Poster for ${original_title ? original_title : 'movie'}`}
          sizes={'33vw'}
          quality={100}
          placeholder="blur"
          className="object-contain z-10 w-[30%] min-h-min ml-12 shadow-2xl shadow-neutral-800"
        ></Image>
      </div>
    </div>
  );
}
export default BackdropPoster;
