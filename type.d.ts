export type TGenres = TGenre[];

export interface TGenre {
  id: number | string; //string for special case only, in this case because we will use Top Trend and Top Rated
  name: string;
}
export type TDataTopRated = {
  page?: number;
  results?: TMovie[];
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
};

export type TUserPropResult = {
  genres: TGenres;
  movies?: TMovie[];
};

export type TMoviePagePropResult = {
  movie: TMovie;
};
