import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
type Props = {
    searchFormOpen: boolean;
    setSearchFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export const SearchForm = ({ searchFormOpen }: Props) => {
    const router = useRouter();
    const [input, setInput] = useState<string>('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (input.length <= 0) return;
        router.push(`/search?searchTerm=${input}`);
    };
    return (
        <form
            className={`sticky top-4 left-0 right-0 z-30 flex items-center justify-between rounded-none ${
                !searchFormOpen && `hidden`
            }`}
            onSubmit={(e) => handleSubmit(e)}
        >
            {searchFormOpen && (
                <MagnifyingGlassIcon className="h-9 w-9 justify-end border-none bg-white py-2" />
            )}
            <input
                type="text"
                name="search-box"
                id="search-box"
                placeholder="Search for Movies or TV Shows name"
                className="w-full border-none p-2 text-sm text-hulu-black"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="button"
                title="Clear search"
                onClick={() => setInput('')}
                className={`${input.length > 0 ? 'block' : 'hidden'} bg-white`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 bg-white py-1"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
        </form>
    );
};
