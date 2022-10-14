import React, { useRef } from 'react';
import { TCast } from '../../../../type';
import { ScrollButtons } from '../../Utils/ScrollButtons';
import CastCard from './CastCard';

type Props = {
    cast?: TCast[];
};
const CastOverview = ({ cast: topCast }: Props) => {
    const listRef = useRef<HTMLUListElement>(null);
    return topCast && topCast.length > 0 ? (
        <section className="casts p-4 lg:px-10">
            <h2 className="section-title"> Top Billed Cast</h2>
            <div className="group relative">
                <ul
                    ref={listRef}
                    className="flex flex-grow snap-x gap-5 overflow-x-scroll overscroll-x-contain scroll-smooth pb-10 scrollbar-hide"
                >
                    {topCast.map((topCastMember) => (
                        <li
                            className="flex w-36 snap-center flex-col gap-4 rounded-lg shadow-2xl first:ml-2 last:mr-10"
                            key={topCastMember.id}
                        >
                            {<CastCard topCastMember={topCastMember} />}
                        </li>
                    ))}
                </ul>
                <ScrollButtons listRef={listRef} />
            </div>
        </section>
    ) : (
        <>No Information About Cast</>
    );
};
export default CastOverview;
