import Image from 'next/future/image';
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
    <header className="flex h-auto flex-col justify-between p-4 sm:flex-row sm:items-center 2xl:justify-around">
      <div className="flex max-w-2xl flex-grow justify-evenly">
        <HeaderItem url={'/'} title="HOME" Icon={HomeIcon}></HeaderItem>
        <HeaderItem
          url={'/genres/top-rated'}
          title="TOP RATED"
          Icon={BoltIcon}
        ></HeaderItem>
        <HeaderItem title="VERIFIED" Icon={CheckBadgeIcon}></HeaderItem>
        <HeaderItem title="SEARCH" Icon={MagnifyingGlassIcon}></HeaderItem>
        <HeaderItem title="COLLECTION" Icon={RectangleStackIcon}></HeaderItem>
        <HeaderItem title="USER" Icon={UserIcon}></HeaderItem>
      </div>
      <div className="self-center sm:self-start">
        <Image
          className="object-contain object-center"
          src={HuLuLogo}
          width={150}
          height={100}
          placeholder="blur"
          alt="Hulu Logo"
        ></Image>
      </div>
    </header>
  );
};
export default Header;
