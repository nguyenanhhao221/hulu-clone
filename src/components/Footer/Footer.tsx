import Image from 'next/future/image';
import React from 'react';
import HuluLogo from '../../../public/Hulu-Green-digital.png';
import {
    AiFillGithub,
    AiFillFacebook,
    AiFillTwitterCircle,
} from 'react-icons/ai';
import Link from 'next/link';
import { CodeBracketIcon } from '@heroicons/react/24/outline';
import { CTAButtons } from '../Utils/CTAButtons';
import TMDBLogo from '../../../public/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg';
export const Footer = () => {
    const CTAButtonsProps = {
        btnTitle: 'source code',
        Icon: CodeBracketIcon,
    };
    return (
        <footer className="border-t border-gray-300 border-opacity-20 px-4 py-4">
            <div className="mx-auto grid w-full max-w-[80%] grid-cols-1 justify-items-center gap-3 md:grid-cols-3 md:place-items-center ">
                <div className="h-auto w-[50%] cursor-pointer md:row-span-2 lg:w-[30%]">
                    <Link href={'/'} title="Go To Homepage">
                        <Image
                            src={HuluLogo}
                            alt="Hulu logo"
                            placeholder="blur"
                            className="h-auto w-auto object-contain object-center "
                        />
                    </Link>
                </div>
                <div className="flex flex-col items-center md:col-start-3">
                    <p className="bg-blue-200 bg-gradient-to-r from-indigo-400 to-cyan-300 bg-clip-text text-center text-sm text-transparent lg:text-xl">
                        Created By Hao Nguyen
                    </p>
                    <ul className="flex">
                        <li className="group cursor-pointer border-r border-gray-400 border-opacity-30 px-2 py-1">
                            {
                                <Link
                                    href="https://github.com/nguyenanhhao221"
                                    passHref
                                    prefetch={false}
                                >
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <AiFillGithub className="group-hover:fill-github" />
                                    </a>
                                </Link>
                            }
                        </li>
                        <li className="group cursor-pointer border-r border-gray-400 border-opacity-30 px-2 py-1">
                            {
                                <Link
                                    href="https://www.facebook.com/haonguyen11295/"
                                    passHref
                                    prefetch={false}
                                >
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <AiFillFacebook className="group-hover:fill-facebook" />
                                    </a>
                                </Link>
                            }
                        </li>
                        <li className="group cursor-pointer px-2 py-1">
                            {
                                <Link
                                    href="https://twitter.com/nguyenanhhao221"
                                    passHref
                                >
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title="Hao Nguyen's Twitter"
                                    >
                                        <AiFillTwitterCircle className="group-hover:fill-twitter" />
                                    </a>
                                </Link>
                            }
                        </li>
                    </ul>
                </div>
                <CTAButtons CTAProps={CTAButtonsProps} />
                <div className="flex h-auto w-[20%] items-center justify-center gap-2 md:col-start-3">
                    <Link passHref href={'https://www.themoviedb.org/'}>
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            title="The Movie Database"
                        >
                            <Image
                                src={TMDBLogo}
                                alt="TMDB Logo"
                                className="h-auto w-full"
                            ></Image>
                        </a>
                    </Link>
                </div>
            </div>
        </footer>
    );
};
