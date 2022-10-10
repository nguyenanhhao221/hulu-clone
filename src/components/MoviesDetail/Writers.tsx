import React from 'react';
import { TCrew, TMovie } from '../../../type';

type Props = {
    created_by?: TMovie['created_by'];
    crew?: TCrew[];
};

const Writers = ({ created_by, crew }: Props) => {
    const crewRender = crew?.filter(
        ({ job }) =>
            job?.toLowerCase() === 'characters' ||
            job?.toLowerCase() === 'director' ||
            job?.toLowerCase() === 'writer' ||
            job?.toLowerCase() === 'story' ||
            job?.toLowerCase() === 'screenplay'
    );
    //Some crew member will have duplicate because they handle multiple department
    const uniqueCrew = crewRender?.filter((item, index, self) => {
        return self.findIndex((t) => t.id === item.id) === index;
    });

    const renderCredits = created_by || uniqueCrew;
    return (
        <ul className="grid grid-cols-2 gap-2">
            {renderCredits?.map(({ id, name, job = 'Creator' }) => (
                <li className="text-left" key={id}>
                    <p className="font-bold">{name}</p>
                    <span>{job}</span>
                </li>
            ))}
        </ul>
    );
};

export default Writers;
