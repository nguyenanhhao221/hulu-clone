import Image from "next/future/image";
import { TImageProps, TMovie } from "../../../type";
import DesktopMovieOverview from "./DesktopMovieOverview";
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
    <div className="relative max-h-[60vh] w-full overflow-hidden md:max-h-[90vh] 2xl:max-h-[100vh] ">
      <div className="absolute z-0 h-full w-full ">
        <Image
          // {...backdropImagesProps}
          alt={`Backdrop for ${original_title ? original_title : "movie"}`}
          className="z-0 object-cover object-center lg:object-right"
          src={backdropImagesProps.src}
          sizes="100vw"
          placeholder="blur"
          blurDataURL={backdropImagesProps.blurDataURL}
          quality={100}
          fill
        ></Image>
      </div>
      <div className="relative grid max-h-[80%] grid-cols-2 place-items-center justify-evenly bg-gradient-to-br from-black p-4 lg:grid-cols-[30%_70%] lg:gap-5 lg:px-10 lg:py-20 xl:gap-10 2xl:h-[80vh] 2xl:max-h-[100%]">
        <div className="flex w-full justify-end">
          <Image
            src={posterImagesProps.src}
            width={300}
            height={500}
            blurDataURL={posterImagesProps.blurDataURL}
            alt={`Poster for ${original_title ? original_title : "movie"}`}
            sizes={"33vw"}
            quality={100}
            placeholder="blur"
            className="shadow-neutral-800 hi z-[1] 
              h-full object-contain object-center shadow-2xl"
          ></Image>
        </div>
        <DesktopMovieOverview movie={movie}></DesktopMovieOverview>
      </div>
    </div>
  );
}
export default BackdropPoster;
