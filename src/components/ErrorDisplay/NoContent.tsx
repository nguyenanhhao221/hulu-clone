import { ArrowUturnLeftIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Url } from 'url';
import { CTAButtons } from '../Utils/CTAButtons';
type Props = {
    noSearchResult?: boolean;
    noGenresResult?: boolean;
};
const NoContent = ({ noSearchResult, noGenresResult }: Props) => {
    const href = '/' as unknown as Url;
    return (
        <div className="flex h-[80vh] flex-col items-center justify-center gap-4">
            <h2 className="text-center text-3xl font-extrabold">
                No Content Available!
            </h2>
            {noGenresResult && (
                <p className="text-center text-xl">
                    Cannot find any results. Please try again!
                </p>
            )}
            {noSearchResult && (
                <>
                    <p className="text-center text-xl">
                        Cannot find any results. Please try again!
                    </p>
                    <CTAButtons
                        CTAProps={{
                            btnTitle: 'Homepage',
                            Icon: ArrowUturnLeftIcon,
                            href: href,
                        }}
                        backHome
                    />
                </>
            )}
        </div>
    );
};

export default NoContent;
