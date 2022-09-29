import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';

const Home: NextPage = () => {
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
    </div>
  );
};

export default Home;
