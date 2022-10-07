export interface TGenre {
  id: number | string; //string for special case only, in this case because we will use Top Trend and Top Rated
  name: string;
}
export type TDataResponseTMDB = {
  page?: number;
  results: TMovie[];
  total_pages?: number;
  total_results?: number;
};
export type TMovie = {
  poster_path?: string;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: Array[number];
  id?: number;
  original_title?: string;
  original_language?: string;
  title?: string;
  backdrop_path?: string | null;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
  tagline?: string;
  runtime?: string | number;
  genres?: TGenre[];
  homepage?: string;
  first_air_date?: string;
  name?: string;
  original_name?: string;
  next_episode_to_air?: {
    air_date?: string;
    episode_number?: number;
    id?: number;
    name?: string;
    overview?: string;
    production_code: string | number;
    runtime?: number;
    season_number?: number;
    show_id?: number;
    still_path?: string;
    vote_average?: number;
    vote_count?: number;
  };
  imageProps: ILoadImageImg & { blurDataURL: string };
};
export type ILoadImageImg = {
  src: string;
  height?: number | string;
  width?: number | string;
  type?: string;
};
export type TCategory = 'tv' | 'movie';
export type TUserPropResult = {
  genres: TGenre[][];
  movies?: TMovie[][];
};

export type TMoviePagePropResult = {
  movie: TMovie;
  backdropImagesProps: TImageProps;
  posterImagesProps: TImageProps;
};
export type TImageProps = {
  blurDataURL: string;
} & ILoadImageImg;

type TImageReturn = {
  height: number;
  width: number;
  src: string;
  type: string;
};
export type TFetchDetailParams = {
  apiKey: string;
  id: string;
  category: 'movie' | 'tv';
};
