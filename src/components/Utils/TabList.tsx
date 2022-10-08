import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { TCategory } from '../../../type';
import CategoryContextProvider from '../CategoryContextProvider/CategoryContextProvider';

type Props = {
  currentTab: string;
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
};
function TabList({ currentTab, setCurrentTab }: Props) {
  //Use to update the category state so the movies and navbar can display correctly
  const { setCategory } = useContext(CategoryContextProvider);
  //This is separate to create the tab buttons
  const categoriesButtons: {
    id: TCategory;
    category: string;
  }[] = [
    {
      id: 'movie',
      category: 'Movie',
    },
    {
      id: 'tv',
      category: 'TV',
    },
  ];
  const router = useRouter();
  const { category: categoryQuery, genreId: genreIdQuery } = router.query;
  console.log('🚀 ~ TabList ~ genreIdQuery', genreIdQuery);
  console.log('🚀 ~ TabList ~ categoryQuery', categoryQuery);
  return (
    <div className="text-center ">
      <div
        role="tablist"
        className="tabs tabs-boxed inline-block rounded-xl border border-hulu-green bg-hulu-main"
      >
        {categoriesButtons.map((category) => (
          <button
            role="tab"
            className={`tab tab-lifted tab-md text-white ${
              currentTab === category.id ? 'tab-active ' : ''
            }`}
            type="button"
            key={category.id}
            onClick={() => {
              setCurrentTab(category.id);
              setCategory(category.id);
              //router.push(url, as, options)
              router.push(`/genres/${category.id}/${genreIdQuery}`, undefined, {
                shallow: true, //don't refresh the page, just replace the URL
              });
            }}
          >
            <span className="capitalize">{category.category}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
export default TabList;
