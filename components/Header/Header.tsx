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
type Props = {};
const Header = (props: Props) => {
  return (
    <header className="m-2 flex h-auto flex-col items-center justify-between sm:flex-row">
      <div className="flex max-w-2xl flex-grow justify-evenly">
        <HeaderItem title="HOME" Icon={HomeIcon}></HeaderItem>
        <HeaderItem title="TRENDING" Icon={BoltIcon}></HeaderItem>
        <HeaderItem title="VERIFIED" Icon={CheckBadgeIcon}></HeaderItem>
        <HeaderItem title="SEARCH" Icon={MagnifyingGlassIcon}></HeaderItem>
        <HeaderItem title="COLLECTION" Icon={RectangleStackIcon}></HeaderItem>
        <HeaderItem title="USER" Icon={UserIcon}></HeaderItem>
      </div>
      <div>
        <Image
          src="https://links.papareact.com/ua6"
          width={200}
          height={200}
          alt="Logo"
          className="object-contain"
        ></Image>
      </div>
    </header>
  );
};
export default Header;
