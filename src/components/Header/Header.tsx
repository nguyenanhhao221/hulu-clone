import Image from 'next/image';
import HeaderItem from './HeaderItem';
import {
  HomeIcon,
  CheckBadgeIcon,
  MagnifyingGlassIcon,
  RectangleStackIcon,
  BoltIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import HuLuLogo from '../../../public/Hulu-Green-digital.png';
const Header = () => {
  return (
    <header className="flex h-auto flex-col items-center justify-between p-4 sm:flex-row">
      <div className="flex max-w-2xl flex-grow justify-evenly">
        <HeaderItem
          url={'/genres/top-rated'}
          title="HOME"
          Icon={HomeIcon}
        ></HeaderItem>
        <HeaderItem
          url={'/genres/top-trend'}
          title="TRENDING"
          Icon={BoltIcon}
        ></HeaderItem>
        <HeaderItem title="VERIFIED" Icon={CheckBadgeIcon}></HeaderItem>
        <HeaderItem title="SEARCH" Icon={MagnifyingGlassIcon}></HeaderItem>
        <HeaderItem title="COLLECTION" Icon={RectangleStackIcon}></HeaderItem>
        <HeaderItem title="USER" Icon={UserIcon}></HeaderItem>
      </div>
      <div>
        <Image
          src={HuLuLogo}
          width={150}
          height={100}
          alt="Hulu Logo"
          objectFit="contain"
          className="object-center"
        ></Image>
      </div>
    </header>
  );
};
export default Header;
