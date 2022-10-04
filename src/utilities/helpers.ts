import type { TGenres, TGenre } from '../../type';

export const getUnique = (arr: TGenres[]) => {
  //* Merge 1 level deep of nested array
  const mergeArr = arr.flat(1);
  const arrayUniqueByKey = [
    ...new Map(mergeArr.map((item) => [item?.id, item])).values(),
  ];
  return arrayUniqueByKey;
};

export const addTopTrendTopRated = (
  arr: TGenres,
  topTrendObj: TGenre,
  topRatedObj: TGenre
): TGenres => {
  arr.unshift(topTrendObj, topRatedObj);
  return arr;
};

export const BASE_IMAGE_URL = 'https://image.tmdb.org/t/p/original';
