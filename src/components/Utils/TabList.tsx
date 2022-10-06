import React from 'react';

type Props = {
  currentTab: string;
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
};
function TabList({ currentTab, setCurrentTab }: Props) {
  const unUsed = 1;
  const categoriesButtons = [
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
            onClick={() => setCurrentTab(category.id)}
          >
            <span className="capitalize">{category.category}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
export default TabList;
