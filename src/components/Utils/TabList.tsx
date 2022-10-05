import { useState } from 'react';

type Props = {};
function TabList({}: Props) {
  const [active, setActive] = useState(true);
  return (
    <div className="text-center ">
      <div className="tabs border inline-block rounded-xl tabs-boxed bg-hulu-main border-hulu-green">
        <a
          className={`tab-md text-white tab tab-lifted ${
            active ? 'tab-active bg-success' : ''
          }`}
          onClick={(e) => {
            setActive(!active);
          }}
        >
          Movies
        </a>
        <a
          className={`tab-md text-white tab tab-lifted ${
            !active ? 'tab-active' : ''
          }`}
          onClick={(e) => {
            setActive(!active);
          }}
        >
          TV
        </a>
      </div>
    </div>
  );
}
export default TabList;
