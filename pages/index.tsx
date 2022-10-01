import axios, { AxiosResponse } from 'axios';
import type { NextPage, GetStaticPropsContext } from 'next';
import Header from '../components/Header/Header';
import Movies from '../components/Movies/Movies';
import Navbar from '../components/Navbar/Navbar';
import type { TGenres } from '../type';
import { dummyData } from '../utilities/dummyData';
import { fetchAllGenres } from '../utilities/requests';

//TODO Remove when make actual API call
type Props = {
  genres: TGenres;
};
const Home: NextPage<Props> = ({ genres }) => {
  return (
    <div>
      <Header></Header>
      <Navbar genres={genres}></Navbar>
      <Movies movies={dummyData.results}></Movies>
    </div>
  );
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const apiKey = process.env.API_KEY;
  if (typeof apiKey === 'undefined')
    throw new Error('apiKey does not exist in ENV');

  const response = await fetchAllGenres(apiKey);
  return {
    props: {
      genres: response,
    },
  };
};

export default Home;
