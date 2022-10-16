import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';
import { Url } from 'url';

type Props = {
    CTAProps: {
        btnTitle: string;
        Icon?: ((props: React.ComponentProps<'svg'>) => JSX.Element) | IconType;
        href: Url;
    };
    backHome?: boolean;
};
export const CTAButtons = ({
    CTAProps: { btnTitle, Icon, href },
    backHome,
}: Props) => {
    return (
        <button
            type="button"
            className={`group rounded-lg bg-hulu-black p-2 font-bold capitalize ring-1 ring-hulu-green transition-colors hover:bg-hulu-green hover:bg-none hover:text-hulu-black active:animate-ping md:col-start-2 md:row-span-2 md:row-start-1 `}
        >
            <Link href={href} prefetch={false} passHref>
                <a
                    target={backHome ? `` : `_blank`}
                    title={btnTitle}
                    rel="noopener noreferrer"
                    className="flex flex-nowrap items-center justify-center gap-1 "
                >
                    {Icon && (
                        <Icon
                            className={`h-4 w-4 motion-safe:group-hover:animate-bounce`}
                        />
                    )}
                    <span className="">{btnTitle}</span>
                </a>
            </Link>
        </button>
    );
};
