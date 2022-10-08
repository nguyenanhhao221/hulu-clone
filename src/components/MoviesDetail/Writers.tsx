import React from 'react';
import { TMovie } from '../../../type';

type Props = {
    created_by?: TMovie['created_by'];
};

const Writers = ({ created_by }: Props) => (
    <ul className="flex w-4/5 flex-wrap items-center justify-between gap-2">
        {created_by?.map((writer) => (
            <li className="text-left" key={writer.id}>
                <p className="font-bold">{writer.name}</p>
                <p>Creator</p>
            </li>
        ))}
    </ul>
);

export default Writers;
