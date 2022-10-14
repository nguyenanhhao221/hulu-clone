import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/Header/Header';
import React, { createContext, useState } from 'react';

export const LoadContext = createContext({
    loadingContext: false,
    setLoadingContext: (prevState: boolean) => {
        !prevState;
    },
});
function MyApp({ Component, pageProps }: AppProps) {
    const [loadingContext, setLoadingContext] = useState(false);
    return (
        <>
            <Head>
                <title>Hulu 2.0</title>
                <link
                    rel="apple-touch-icon"
                    sizes="57x57"
                    href="/apple-icon-57x57.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="60x60"
                    href="/apple-icon-60x60.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="72x72"
                    href="/apple-icon-72x72.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="76x76"
                    href="/apple-icon-76x76.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="114x114"
                    href="/apple-icon-114x114.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="120x120"
                    href="/apple-icon-120x120.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="144x144"
                    href="/apple-icon-144x144.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="/apple-icon-152x152.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-icon-180x180.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/android-icon-192x192.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="96x96"
                    href="/favicon-96x96.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/manifest.json" />
                <link
                    rel="canonical"
                    href="https://projects.haonguyen.tech/en/genres/movie/popular"
                />
                <meta name="msapplication-TileColor" content="#183949" />
                <meta
                    name="msapplication-TileImage"
                    content="/ms-icon-144x144.png"
                />
                <meta name="theme-color" content="#183949" />
                <meta name="title" content="Hulu Clone 2.0" />
                <meta
                    name="keywords"
                    content="Project, Movies, Hulu, NextJS, TailwindCSS"
                />
                <meta
                    name="description"
                    content="A Clone of Hulu Using NextJS, TailwindCSS and TMDB Database. "
                />
                <meta name="author" content="Hao Nguyen" />
                <meta
                    property="og:title"
                    content="Hulu Clone 2.0 by Hao Nguyen"
                />
                <meta
                    property="og:url"
                    content="https://projects.haonguyen.tech"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content="https://res.cloudinary.com/dspmtoehq/image/upload/v1664907742/HuluCloneMock_ejozgu.png"
                />
                <meta name="apple-mobile-web-app-capable" content="yes" />
            </Head>
            <Header />
            <LoadContext.Provider value={{ loadingContext, setLoadingContext }}>
                <Component {...pageProps} />
            </LoadContext.Provider>
        </>
    );
}

export default MyApp;
