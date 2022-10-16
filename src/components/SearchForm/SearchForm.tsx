import { useRouter } from 'next/router';
import React, { useState } from 'react';

export const SearchForm = () => {
    const router = useRouter();
    const [input, setInput] = useState<string>('');
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (input.length <= 0) return;
        router.push(`/search?searchTerm=${input}`);
    };
    return (
        <form
            className="flex items-center justify-between"
            onSubmit={(e) => handleSubmit(e)}
        >
            <input
                type="text"
                name="search-box"
                id="search-box"
                placeholder="Search for Movies or TV Shows name"
                className="w-full rounded-xl p-2 text-sm text-hulu-black"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="button"
                title="Clear search"
                className={`${input.length > 0 ? 'visible' : 'invisible'} `}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
            <button type="submit" value="submit">
                Submit
            </button>
        </form>
    );
};
