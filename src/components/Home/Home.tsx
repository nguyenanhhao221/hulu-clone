import React, { useState } from 'react';
import type { TCategory, TGenre, TMovie } from '../../../type';
import CategoryContextProvider from '../CategoryContextProvider/CategoryContextProvider';
import { Footer } from '../Footer/Footer';
import Movies from '../Movies/Movies';
import Navbar from '../Navbar/Navbar';
import Title from '../Title/Title';

type Props = {
    genres: TGenre[][];
    movies: TMovie[][];
};

function Home({ genres, movies }: Props) {
    //Default state of category is movie, we also provide this state and its setState as context for children props to access.
    //Because all of the external props on this page will return An array contain 2 Element which each is also an array, with the first array is for 'movie' and second is for 'tv'
    const [category, setCategory] = useState<TCategory>('movie');
    return (
        <CategoryContextProvider.Provider value={{ category, setCategory }}>
            <Navbar genres={genres}></Navbar>
            <Title genres={genres}></Title>
            <Movies movies={movies}></Movies>
            <Footer />
        </CategoryContextProvider.Provider>
    );
}

export default Home;
