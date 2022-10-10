import { StaticImageData } from 'next/future/image';

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
    poster_path?: string | StaticImageData;
    adult?: boolean;
    overview?: string;
    release_date?: string;
    genre_ids?: Array[number];
    id?: number;
    original_title?: string;
    original_language?: string;
    title?: string;
    backdrop_path?: string | null | StaticImageData;
    ƒ;
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
    next_episode_to_air?: EpisodeToAir;
    episode_run_time?: number[];
    imageProps: ILoadImageImg & { blurDataURL?: string };
    created_by?: IWritersTV[];
    content_ratings?: TAgeRating;
    release_dates?: TAgeRating;
};
type TAgeRating = {
    results?: {
        iso_3166_1?: string;
        rating?: string;
        release_dates?: {
            certification?: string;
            iso_639_1?: string;
            note?: string;
            release_date?: string;
            type?: number;
        }[];
    }[];
};
interface IWritersTV {
    id?: number;
    credit_id?: string;
    name?: string;
    gender?: number;
    profile_path?: string | null;
}
export type EpisodeToAir = {
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

export type ILoadImageImg = {
    src: string | StaticImageData;
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
    backdropImagesProps: TImageProps | boolean;
    posterImagesProps: TImageProps | boolean;
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
