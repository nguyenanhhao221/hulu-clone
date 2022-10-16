import Image from 'next/future/image';
import HeaderItem from './HeaderItem';
import {
    HomeIcon,
    CheckBadgeIcon,
    MagnifyingGlassIcon,
    RectangleStackIcon,
    BoltIcon,
    UserIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import HuLuLogo from '../../../public/Hulu-Green-digital.png';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { SearchForm } from '../SearchForm/SearchForm';
const Header = () => {
    const router = useRouter();
    const [searchFormOpen, setSearchFormOpen] = useState<boolean>(false);
    const { category, genreId } = router.query;
    const handleClick = () => {
        if (category === 'movie' && genreId === 'popular') return;
        return router.push('/');
    };
    if (searchFormOpen)
        return (
            <header className="sticky top-0 bg-gradient-to-r from-hulu-gradient-from to-hulu-gradient-to py-4">
                <div className="flex cursor-pointer items-center  justify-end hover:text-white">
                    <button
                        type="button"
                        title="Close"
                        onClick={() => setSearchFormOpen(false)}
                        className="group flex flex-col items-center justify-center"
                    >
                        <XMarkIcon className="mb-1 h-8 group-hover:animate-bounce" />
                        <p className="invisible tracking-widest group-hover:visible">
                            CLOSE
                        </p>
                    </button>
                </div>
                <SearchForm
                    searchFormOpen={searchFormOpen}
                    setSearchFormOpen={setSearchFormOpen}
                />
            </header>
        );
    return (
        <header className="flex h-auto flex-col justify-between p-4 transition-all sm:flex-row sm:items-center 2xl:justify-around">
            <div className="flex max-w-2xl flex-grow justify-evenly whitespace-nowrap">
                <HeaderItem
                    url={'/genres/movie/popular'}
                    title="HOME"
                    Icon={HomeIcon}
                ></HeaderItem>
                <HeaderItem
                    url={'/genres/movie/top-rated'}
                    title="TOP RATED"
                    Icon={BoltIcon}
                ></HeaderItem>
                <HeaderItem title="VERIFIED" Icon={CheckBadgeIcon}></HeaderItem>
                <HeaderItem
                    title="SEARCH"
                    Icon={MagnifyingGlassIcon}
                    setSearchFormOpen={setSearchFormOpen}
                    searchFormOpen={searchFormOpen}
                ></HeaderItem>
                <HeaderItem
                    title="COLLECTION"
                    Icon={RectangleStackIcon}
                ></HeaderItem>
                <HeaderItem title="USER" Icon={UserIcon}></HeaderItem>
            </div>
            <div className="cursor-pointer self-center sm:self-start">
                <Image
                    className="h-auto w-auto object-contain object-center"
                    src={HuLuLogo}
                    width={150}
                    height={100}
                    placeholder="blur"
                    alt="Hulu Logo"
                    onClick={() => handleClick()}
                ></Image>
            </div>
        </header>
    );
};
export default Header;
