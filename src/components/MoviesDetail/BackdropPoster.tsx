import Image from 'next/future/image';
import { BASE_IMAGE_URL } from '../../utilities/helpers';
type Props = {
  original_title?: string;
  poster_path?: string;
  backdrop_path?: string | null;
  imageProps: any;
};
function BackdropPoster({ original_title, poster_path, imageProps }: Props) {
  return (
    <div className="relative">
      <Image
        {...imageProps}
        alt={`Backdrop for ${original_title ? original_title : 'movie'}`}
        className=" object-cover object-right w-full z-1 fill-red-700  blur-[0.5px]"
        sizes="100vw"
        placeholder="blur"
        quality={100}
      ></Image>
      <div className="w-full h-1/2 absolute inset-y-4 xl:inset-y-28">
        <Image
          src={`${BASE_IMAGE_URL}${poster_path}`}
          alt={`Backdrop for ${original_title ? original_title : 'movie'}`}
          sizes={'33vw'}
          width={200}
          height={150}
          quality={100}
          className="object-contain z-10 w-[30%] min-h-min ml-12 shadow-2xl shadow-neutral-800"
        ></Image>
      </div>
    </div>
  );
}
export default BackdropPoster;
