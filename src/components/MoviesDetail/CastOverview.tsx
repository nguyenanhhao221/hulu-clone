import { TCast } from '../../../type';
import CastCard from './CastCard';

type Props = {
    cast?: TCast[];
};
const CastOverview = ({ cast: topCast }: Props) => {
    return topCast && topCast.length > 0 ? (
        <section className="casts p-4">
            <h2 className="section-title lg:px-10"> Top Billed Cast</h2>
            <div className="relative">
                <ul className="flex flex-grow snap-x gap-5 overflow-x-auto overscroll-x-contain scrollbar-hide lg:px-10 ">
                    {topCast.map((topCastMember) => (
                        <li
                            className={`flex w-36 snap-center flex-col gap-4 rounded-lg shadow-2xl last:mr-10 ${
                                !topCastMember.profile_path && `justify-between`
                            }`}
                            key={topCastMember.id}
                        >
                            {<CastCard topCastMember={topCastMember} />}
                        </li>
                    ))}
                </ul>
                <div className="absolute top-0 bottom-0 right-0 w-1/12 bg-gradient-to-l from-hulu-gradient-to "></div>
            </div>
        </section>
    ) : (
        <>No Information About Cast</>
    );
};
export default CastOverview;
