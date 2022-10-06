import React, { createContext } from 'react';
import { TCategory } from '../../../type';

type TCategoryContextProvider = {
  category: TCategory;
  setCategory: React.Dispatch<React.SetStateAction<TCategory>>;
};

//* The context Provider use to provide category and setCategory for children components
const CategoryContextProvider = createContext<TCategoryContextProvider>({
  category: 'movie', //Here we set default value only
  setCategory: () => 'movie',
});

export default CategoryContextProvider;
