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
  return (
    <div className="text-center ">
      <div
        role="tablist"
        className="tabs border inline-block rounded-xl tabs-boxed bg-hulu-main border-hulu-green"
      >
        {categoriesButtons.map((category) => (
          <button
            role="tab"
            className={`tab-md text-white tab tab-lifted ${
              currentTab === category.id ? 'tab-active ' : ''
            }`}
            type="button"
            key={category.id}
            onClick={() => {
              setCurrentTab(category.id);
              setCategory(category.id);
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
